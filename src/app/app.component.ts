import { Component, OnInit } from '@angular/core';
import { Classroom } from './classroom';
import { ClassroomService } from './classroom.service';

@Component({
  selector: 'app-root',
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .classrooms {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .classrooms li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .classrooms li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .classrooms li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .classrooms .text {
      position: relative;
      top: -3px;
    }
    .classrooms .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  template: `
  <h1>Welcome to {{title}}</h1>
  <h2>My Classrooms</h2>
  <ul class="classrooms">
    <li *ngFor="let classroom of classrooms"
        [class.selected]="classroom === selectedClassroom"
        (click)="onSelect(classroom)">
      <span class="badge">{{classroom.id}}</span> {{classroom.name}}
    </li>
  </ul>
  <classroom-detail [classroom]="selectedClassroom"></classroom-detail>
  `,
  providers: [ClassroomService]
})

export class AppComponent implements OnInit {
  title = 'lynkt';
  classrooms: Classroom[];
  selectedClassroom: Classroom;

  constructor(private classroomService: ClassroomService) { }

  onSelect(classroom: Classroom): void {
    this.selectedClassroom = classroom;
  }

  ngOnInit(): void {
    this.getClassrooms();
}

  getClassrooms(): void {
    this.classroomService.getClassrooms().then(classrooms => this.classrooms = classrooms);
  }
}


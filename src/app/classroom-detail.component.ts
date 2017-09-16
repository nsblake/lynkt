import { Component, Input } from '@angular/core';
import { Classroom } from './classroom';

@Component({
  selector: 'classroom-detail',
  template: `<div *ngIf="classroom">
    <h2>{{classroom.name}} Course Details</h2>
    <div>
      <label>id: </label>{{classroom.id}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="classroom.name" placeholder="name">
    </div>
  </div>
  `
})
export class ClassroomDetailComponent {
  @Input() classroom: Classroom;
}

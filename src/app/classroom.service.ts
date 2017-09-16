import { Injectable } from '@angular/core';

import { Classroom } from './classroom';
import { CLASSROOMS } from './mock-classrooms';

@Injectable()
export class ClassroomService {
  getClassrooms(): Promise<Classroom[]> {
    return Promise.resolve(CLASSROOMS);
  }
}

import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  // custom method, accessable from other components
  // before use of this service we need to reference it in app.module file
  changeGoal(goal){
    this.goals.next(goal);
  }

}

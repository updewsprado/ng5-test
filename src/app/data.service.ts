import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>([
    'I want to be a billionaire', 
    'I want to be an effective leader',
    'I want to master how to manage the logic and emotions of people',
  ]);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoals(goal) {
    this.goals.next(goal);
  }

}

import { Component, OnInit, Optional } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  //template: `
  //<p>This is my html
  //`,
  styleUrls: ['./home.component.css'],
  //styles: [`
  //  p {font-waight: bold;}
  //  div {color: gray;}
  //`]
  animations:[
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

          query(':leave', stagger('300ms', [
            animate('.6s ease-in', keyframes([
              style({opacity: 1, transform: 'translateY(0)', offset: 0}),
              style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
              style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
            ]))]), {optional: true})
    ])
  ])
  ]
})
export class HomeComponent implements OnInit {

  // properties
  itemCount: number;
  btnText: string = 'Add an item';
  goalText: string = 'My first life goal';
  goals = [];
  // dono need it any more: goals = ['My first life goal','I want to climb a mountain', 'Go ice skiing'];

  // create an instance of Service through DI
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);

    // update counter
    this.itemCount = this.goals.length;

    // update Goal property
    this._data.changeGoal(this.goals);
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';

    // update counter
    this.itemCount = this.goals.length;

    // update Goal property
    this._data.changeGoal(this.goals);
  }

  removeItem(i){
    this.goals.splice(i,1);

    // update counter
    this.itemCount = this.goals.length;

    // update Goal property
    this._data.changeGoal(this.goals);
  }

}

import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

// get access to the route parameters
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

goals: any;


  // instance of Activated Route with DI and instance of Router to DI
  constructor(private route: ActivatedRoute, private router: Router,private _data: DataService) {

    // quiry api and set up property here

    // response to console, bind property id 
    this.route.params.subscribe(res => console.log(res.id));

   }

  ngOnInit() {

    // service data
    this._data.goal.subscribe(res => this.goals = res);
  }

  sendMeHome(){

    // to the pass, mentioned in app.routing.module
    this.router.navigate(['']);
  }
}

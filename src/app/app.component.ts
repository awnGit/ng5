import { Component } from '@angular/core';

// component decorator (attribute): specify properties to define a structure of component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// all logic here
export class AppComponent {
  title = 'app';
}

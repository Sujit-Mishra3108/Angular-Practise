import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
  <button class="btn btn-primary" [class.active]="isActive" >Class Binding</button> 
  <button [style.backgroundColor]="isActive ? 'lightblue': 'white'" >Style Binding</button> 
  <button (click)="onSave()">Event Binding</button>
  `,
  // templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{

  title = "list of Courses";
  imageUrl = "http://lorempixel.com/400/200";
  //colSpan = 2;
  isActive = true;  // based on this value button will behave

  onSave(){
    console.log("Button was clicked");
  }
}

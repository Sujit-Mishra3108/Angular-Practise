import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
          <div (click)="onDivClicked($event)" >
            <button class="btn btn-primary" [class.active]="isActive" >Class Binding</button> 
            <button [style.backgroundColor]="isActive ? 'lightblue': 'white'" >Style Binding</button> 
            <button (click)="onSave($event)">Event Binding</button>
          </div>`,
  // templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{

    title = "list of Courses";
    imageUrl = "http://lorempixel.com/400/200";
    //colSpan = 2;
    isActive = true;  // based on this value button will behave

    onSave($event: any){
      console.log("Button was clicked", $event);
    }

    onDivClicked($event: any){
      console.log("Div was clicked", $event);
      
    }
}

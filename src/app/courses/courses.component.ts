import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
            <input #email (keyUp.enter)="onKeyUp(email.value)">
          `,
  // templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{

    onKeyUp(email : any){
      console.log(email);
   }
}

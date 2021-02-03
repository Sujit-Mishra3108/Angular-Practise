import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  template: `
            <input [(ngModel)]="email" (keyUp.enter)="onKeyUp()" />
            <br/>
            {{ course.title | uppercase }} <br/>
            {{ course.ratings | number: '1.1-1' }} <br/>
            {{ course.students | number }} <br/>
            {{ course.price | currency:'INR':true:'3.2-2' }} <br/>
            {{ course.releaseDate | date:'shortDate' }}
          `,
  // templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{

    course = {
      title: "The COmplete Angular Course",
      ratings: 4.9745,
      students: 30123,
      price: 190.95,
      releaseDate: new Date(2021,3,1)
    }

    email = "me@example.com";
    onKeyUp(){
      console.log(this.email);
   }
}

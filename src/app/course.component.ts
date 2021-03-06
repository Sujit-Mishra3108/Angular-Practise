import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'course', // by element '.courses' by class '#courses' by id
   // template: '<h2>{{ title }}</h2>' inline template for multiple inline use ` code ` 
    template: `
    <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses" >
                {{ course }}
            </li>
        </ul>
    `,
})
export class CourseComponent{
    title = "List of Courses";
    // getTitle(){                         // displaying using method of class
    //     return this.title;
    // }
    courses: any;

    constructor( service: CoursesService){       // loose dependency of type services and service will be created automatically
        this.courses = service.getCourses();
    }
}
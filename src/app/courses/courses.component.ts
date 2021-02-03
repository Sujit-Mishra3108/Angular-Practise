import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "list of Courses";
  imageUrl = "http://lorempixel.com/400/200";

  ngOnInit(): void {
  }

}

import { AuthorServiceService } from './author-service.service';
import { CoursesService } from './courses.service';
import { CourseComponent } from './course.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    AuthorServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: any;

  constructor(service: AuthorServiceService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

}

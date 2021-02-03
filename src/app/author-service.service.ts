import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorServiceService {

  getAuthors(){
    return ["author1","author2","author3"]
  }

}

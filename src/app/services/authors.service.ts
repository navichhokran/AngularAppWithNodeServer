import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  
  getAuthors(){
    return ['George R.R Martin'];
  }
}

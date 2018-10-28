import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  authorsUrl    : string   = "/assets/authors.png";
  nameOfAuthors : string[] = [];
  totalAuthors  : number ;

  tweet = {
    likesCount :  20,
    isLiked    : false,
    tweet      :"I have tweeted now."
  }

  books = ['A Storm of Swords','A Dance with Dragons','A Feast for crows','Song of Ice and Fire','A Clash of Kings'];
  viewMode : string = 'image';
  
  constructor(authors : AuthorsService) {
    this.nameOfAuthors = authors.getAuthors();
    this.totalAuthors  = this.nameOfAuthors.length; 
   }

   onClickRemoveIcon(book){
     let index = this.books.indexOf(book);
     this.books.splice(index,1);
   }
   
    onChange(abc){
    console.log("object",abc);
  }
}

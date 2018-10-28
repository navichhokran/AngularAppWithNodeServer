import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {

 @Input('is-liked') isLiked : boolean;
 @Input ('likes-count') likesCount : number = 0 ; 
 @Output('change') change = new EventEmitter();

  onHeartClicked(){ 
    this.likesCount += this.isLiked ? -1 : 1 ;
    this.isLiked = !this.isLiked ;
    this.change.emit({newValue: this.isLiked});
  }
}

export interface LikedChangedEventArgs {
     body : string;
     isLiked : boolean; 
     likesCount : number;
}

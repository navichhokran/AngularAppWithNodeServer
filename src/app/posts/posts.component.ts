import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { PostService } from '../services/post.service';
import { AppError } from '../common/Errors/app-error';
import { NotFoundError } from '../common/Errors/not-found-error';
import { BadRequestError } from '../common/Errors/bad-request-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit() {
    this.service.getAll()
        .subscribe(posts => this.posts = posts);
        console.log('my posts are - ' +  this.posts);
  }

  createPost(newPost: HTMLInputElement) {
     const post = {title : newPost.value};
     newPost.value = '';
       this.service.create(post)
          .subscribe(
            postJson => {
              post['id'] = postJson.id;
              this.posts.splice(0, 0, post);
            },
            (error: AppError) => {
              if (error instanceof BadRequestError) {
                alert('Bad Request - ' + error.originalError);
              } else { throw error; }
            });
   }

  updatePost(post) {
    this.service.update(post)
       .subscribe(
           updatedPost => {
            this.posts[this.posts.indexOf(post)].isRead = true;
            console.log(updatedPost);
          });
   }

  deletePost(post) {
     this.service.delete(post)
       .subscribe(
         () => {
            const index = this.posts.indexOf(post);
            this.posts.splice(index, 1);
          },
          (error: AppError) => {
            if (error instanceof NotFoundError) {
              alert('This post has already been deleted.');
            } else { throw error; }
          });
   }
}

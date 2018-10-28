import { map, filter } from 'rxjs/operators';
import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PostService, private router: Router) {}

  postId: any;
  title: string;
  body: string;
  order: string;

  ngOnInit() {

    // just for testing
    this.route.queryParamMap
    .subscribe(queryParams => this.order = queryParams.get('order'));
    console.log(this.order);

    // needed to get post details
    this.route.paramMap
    .subscribe(params => {
      this.postId =  params.get('postId');
      this.service.get(this.postId)
      .subscribe(post => {
            this.title = post.title ;
            this.body  = post.body;
      });
    });
  }

  // queryparams are not needed in my case , just setting for consistency
  nextPost() {
    const nextPostId = parseInt(this.postId) + 1  ;
    this.router.navigate(['/posts/' + nextPostId], {
      queryParams : {page : 1 , order : 'newest'}
    });
  }

  prevPost() {
    const prevPostId = parseInt(this.postId) - 1  ;
    this.router.navigate(['/posts/' + prevPostId], {
      queryParams : {page : 1 , order : 'newest'}
    });
  }
}

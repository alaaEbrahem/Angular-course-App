import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-call-http',
  templateUrl: './call-http.component.html',
  styleUrls: ['./call-http.component.scss']
})
export class CallHttpComponent implements OnInit {
  posts: any;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(response => {
      this.posts = response;
    })
  }
  createPost(input: string) {
    let post = { body: input, id: '' };
    this.postService.createPost(post)
      .subscribe(response => {
        //update view
        (this.posts as Array<Object>).unshift(post);
      })
  }
  updatePost(post, input: string) {
    let updatePost = { body: input, id: post.id };
    this.postService.updatePost(updatePost).subscribe(response => {
      //update view
      this.posts[post.id - 1] = updatePost;
    })
  }
  deletePost(post) {
    let index = (this.posts as Array<Object>).indexOf(post)
    this.postService.deletePost(post).subscribe(response => {
      (this.posts as Array<Object>).splice(index, 1);
    })
  }

}

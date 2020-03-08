import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: any = [];
  url: string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }
  getPosts() {
    return this.http.get(this.url);
  }
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post))
  }
  updatePost(updatePost) {
    return this.http.put(this.url + '/' + updatePost.id, JSON.stringify(updatePost))
  }
  deletePost(post){
    console.log(post);
    return this.http.delete(this.url + '/' + post.id);
  }

}

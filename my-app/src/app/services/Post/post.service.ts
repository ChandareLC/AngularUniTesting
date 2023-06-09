import { Injectable } from '@angular/core';
import {Post} from "../../model/post";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private  http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

  }
  getPost(postId: number) {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }



  deletePost(post:Post){
    return this.http.delete(
      'https://jsonplaceholder.typicode.com/post/${post.id}'
    );

  }
}

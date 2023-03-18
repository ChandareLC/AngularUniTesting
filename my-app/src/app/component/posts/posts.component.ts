import { Component, OnInit } from '@angular/core';
import {Post} from "../../model/post";
import {PostService} from "../../services/Post/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass']
})
export class PostsComponent implements OnInit {
  posts:Post[] = [];

  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.postService.getPosts().subscribe((posts) =>{
      this.posts = posts;
    })

  }

  delete(post:Post){
    this.posts = this.posts.filter(p=>p.id !== post.id);
    this.postService.deletePost(post).subscribe();


  }

}

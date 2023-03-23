import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../model/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {
  @Input() post !: Post ;
  @Output() delete = new EventEmitter<Post>();

  constructor() { }
  onDeletePost(event:Event){
    event.preventDefault();
    this.delete.emit(this.post);
  }

}

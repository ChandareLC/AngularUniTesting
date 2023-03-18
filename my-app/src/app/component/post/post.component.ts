import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from "../../model/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent {
  @Input() post !: Post ;
  @Output() delete = new EventEmitter<void>();

  constructor() { }
  onDeletePost(event:Event){
    event.stopPropagation();
    // @ts-ignore
    this.delete.emit(this.post);
  }

}

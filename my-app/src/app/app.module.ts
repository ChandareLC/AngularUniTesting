import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StrenghPipe } from './pipes/Strength/strengh.pipe';
import { PostsComponent } from './component/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import { PostComponent } from './component/post/post.component';
import {RouterLinkWithHref} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    StrenghPipe,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterLinkWithHref
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

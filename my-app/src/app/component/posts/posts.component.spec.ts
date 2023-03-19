
import {Post} from "../../model/post";
import {PostsComponent} from "./posts.component";
import {of} from "rxjs";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {PostService} from "../../services/Post/post.service";

describe('Posts Component', ()=>{
  let POSTS: Post[];
  let component : PostsComponent;
  let postService : any;
  let mockPostService: any;
  let fixture : ComponentFixture<PostsComponent>;


  beforeEach(() => {
    POSTS = [
      {
        id:1,
        body:'body 1',
        title:'title 1',
      },
      {
        id:2,
        body:'body 2',
        title:'title 2',
      },
      {
        id:3,
        body:'body 3',
        title:'title 3',
      },
    ];

    mockPostService= jasmine.createSpyObj(['getPosts','deletePost']);

     TestBed.configureTestingModule({
       declarations:[PostsComponent],
       providers:[
         {
         provide:PostService,
         useValue:mockPostService,
       },
       ],
     });

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
  });

  it('should set posts from the service directly',()=>{
    mockPostService.getPosts.and.returnValue(of(POSTS));
    fixture.detectChanges();
    expect(component.posts.length).toBe(3);
  })
  describe('delete', ()=> {
    beforeEach(()=>{
      mockPostService.deletePost.and.returnValue(of(true));
      component.posts=POSTS;
    })
    it('should delete the selected Post from the posts', ()=>{
      component.delete(POSTS[1]);
      expect(component.posts.length).toBe(2);
    });
    it('should delete the actual selected post in Posts', ()=>{
      component.delete(POSTS[1]);
      for(let post of component.posts){
        expect(post).not.toEqual(POSTS[1]);
      }
    })
    it('should call the  delete method in Post service only once', ()=>{
      component.delete(POSTS[1]);
      expect(mockPostService.deletePost).toHaveBeenCalledTimes(1)
    });
  });
});

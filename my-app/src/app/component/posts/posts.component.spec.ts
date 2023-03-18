
import {Post} from "../../model/post";
import {PostsComponent} from "./posts.component";
import {of} from "rxjs";

describe('Posts Component', ()=>{
  let POSTS: Post[];
  let component : PostsComponent;
  let mockService : any;

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
    mockService = jasmine.createSpyObj(['getPosts','deletePost']);
    component = new  PostsComponent(mockService);
  });
  describe('delete', ()=> {
    beforeEach(()=>{
      mockService.deletePost.and.returnValue(of(true));
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
      expect(mockService.deletePost).toHaveBeenCalledTimes(1)
    });
  });
});

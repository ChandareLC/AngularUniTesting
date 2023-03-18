import {PostService} from "../../services/Post/post.service";
import {Post} from "../../model/post";
import {PostsComponent} from "./posts.component";

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
    mockService = jasmine.createSpyObj(['getPosts','deletePosts']);
    component = new  PostsComponent(mockService);
  });
  describe('delete', ()=> {
    it('should delete the selected Post from the posts', ()=>{

    })
  })
});

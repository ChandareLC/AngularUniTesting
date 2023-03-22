import {HttpClient} from "@angular/common/http";
import {PostService} from "./post.service";
import {of} from "rxjs";
import {TestBed} from "@angular/core/testing";

describe('Post Service',()=>{
  let httpClientSpy : jasmine.SpyObj<HttpClient>;
  let postService : PostService;
  let POSTS = [
    {
      id: 1,
      body: 'body 1',
      title: 'title 1',
    },
    {
      id: 2,
      body: 'body 2',
      title: 'title 2',
    },
    {
      id: 3,
      body: 'body 3',
      title: 'title 3',
    },
  ];

  beforeEach(()=>{
    httpClientSpy= jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers:[PostService,{
        provide: HttpClient,
        useValue:httpClientSpy,
      }]
    })
    postService = TestBed.inject(PostService);
    httpClientSpy = TestBed.inject(HttpClient) as  jasmine.SpyObj<HttpClient>;
  });
  describe('getPost',()=>{
    it('should return expected posts when getposts is called',()=>{
      httpClientSpy.get.and.returnValue(of(POSTS));
      postService.getPosts().subscribe({
        next: (posts) =>{
          expect(posts).toEqual(POSTS);
        },
        error: () => {}
      });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1)
    })
  })
})

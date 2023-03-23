
import {Post} from "../../model/post";
import {PostsComponent} from "./posts.component";
import {of} from "rxjs";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {PostService} from "../../services/Post/post.service";
import {Component, Input, NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";
import {PostComponent} from "../post/post.component";

// @ts-ignore
// @ts-ignore
describe('Posts Component',
  () => {
    let POSTS: Post[];
    let component: PostsComponent;
    let postService: any;
    let mockPostService: any;
    let fixture: ComponentFixture<PostsComponent>;



    beforeEach(() => {
      POSTS = [
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

      mockPostService = jasmine.createSpyObj(['getPosts', 'deletePost']);

      TestBed.configureTestingModule({
        declarations: [PostsComponent,PostComponent],
        providers: [
          {
            provide: PostService,
            useValue: mockPostService,
          },
        ],
         schemas:[NO_ERRORS_SCHEMA]
      });

      fixture = TestBed.createComponent(PostsComponent);
      component = fixture.componentInstance;
    });
    it('should create extract number of Post Component with Posts',()=>{
      mockPostService.getPosts.and.returnValue(of(POSTS));
      fixture.detectChanges();
      const postComponentDEs = fixture.debugElement.queryAll(
        By.directive(PostComponent)
      );
      expect(postComponentDEs.length).toEqual(POSTS.length)

    })

    it('should check whether extract post is sending to PostComponent',()=>{
      mockPostService.getPosts.and.returnValue(of(POSTS));
      fixture.detectChanges();
      // having 3 child component
      const postComponentDEs = fixture.debugElement.queryAll(By.directive(PostComponent));
      for(let i=0;i<postComponentDEs.length;i++){
        let postComponentInstance=postComponentDEs[i]
          .componentInstance as PostComponent;
        expect(postComponentInstance.post.title).toEqual(POSTS[i].title);
      }
    })

    it('should check whether exact post is sending to PostComponent',()=>{
      mockPostService.getPosts.and.returnValue(of(POSTS));
      fixture.detectChanges();
      const postComponentDes = fixture.debugElement.queryAll(By.directive(PostComponent));

      for(let i=0;i<postComponentDes.length;i++){
        let postComponentInstance=postComponentDes[0].componentInstance as PostComponent;

        expect(postComponentInstance.post.title).toEqual(POSTS[0].title)

      }
    })



    it('should set posts from the service directly', () => {
      mockPostService.getPosts.and.returnValue(of(POSTS));
      fixture.detectChanges();
      expect(component.posts.length).toBe(3);
    })

    it('should create one post child element for each post',()=>{
      mockPostService.getPosts.and.returnValue(of(POSTS));
      //check the updated in  HTML
      fixture.detectChanges();
      const debugElement = fixture.debugElement;
      const postElement = debugElement.queryAll(By.css('.posts'));
      expect(postElement.length).toBe(POSTS.length);

    })

    describe('delete', () => {
      beforeEach(() => {
        mockPostService.deletePost.and.returnValue(of(true));
        component.posts = POSTS;
      })
      it('should delete the selected Post from the posts', () => {
        component.delete(POSTS[1]);
        expect(component.posts.length).toBe(2);
      });
      it('should delete the actual selected post in Posts', () => {
        component.delete(POSTS[1]);
        for (let post of component.posts) {
          expect(post).not.toEqual(POSTS[1]);
        }
      })
      it('should call the  delete method in Post service only once', () => {
        component.delete(POSTS[1]);
        expect(mockPostService.deletePost).toHaveBeenCalledTimes(1)
      });
      it('should call delete method when post component button is clicked', ()=> {
        spyOn(component,'delete');
        mockPostService.getPosts.and.returnValue(of(POSTS));
        fixture.detectChanges();

        let postComponetDEs = fixture.debugElement.queryAll(
          By.directive(PostComponent)
        );
        for(let i=0;i<postComponetDEs.length;i++) {
          postComponetDEs[i]
            .query(By.css('button'))
            .triggerEventHandler('click', {
              preventDefault: () => {
              }
            });
          expect(component.delete).toHaveBeenCalledWith(POSTS[i]);
        }
      });;


      })
    });

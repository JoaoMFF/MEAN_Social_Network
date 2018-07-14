import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title = 'comment';
  postId = localStorage.getItem('postId');
  userEmail = localStorage.getItem('userEmail');
  token = localStorage.getItem('token');
  private apiUrlComments = 'http://localhost:3000/api/post/'+this.postId+'/comments'
  private apiUrlPosts = 'http://localhost:3000/api/post/'+this.postId
  comments: any = {};
  posts: any = {};

  constructor(private http: HttpClient, private router: Router) {
    this.getComments();
    this.getPost();
  }

  getPost() {
    return this.http.get(this.apiUrlPosts, {
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).subscribe(
      res => {
        this.posts = res;
        console.log(this.posts);
      },
      err => {
        console.log(err)
      }
    )
  }

  getComments(){
    return this.http.get(this.apiUrlComments, {
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).subscribe(
      res => {
        this.comments = res;
        console.log(this.comments);
      },
      err => {
        console.log(err)
      }
    )
  }

  publishPost(){
    var commentText = (<HTMLInputElement>document.getElementById('commentText')).value;

    return this.http.post(this.apiUrlComments, {
      
      "text": commentText

    },{
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).subscribe(
      res => { 
        console.log(res);
        this.getComments();
        (<HTMLInputElement>document.getElementById('commentText')).value = ""
      },
      err => {
        console.log(err)
      }
    );
  }

  returnToFeed(){
    localStorage.removeItem('postId');
    this.router.navigateByUrl('/feed/page/1');
  }

  deletePost() {
    return this.http.delete(this.apiUrlPosts,{
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).subscribe(
      res => { 
        console.log(res);
        this.router.navigateByUrl('/feed/page/1');
      },
      err => {
        console.log(err)
      }
    );
  }

}

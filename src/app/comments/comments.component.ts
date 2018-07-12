import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {
  title = 'comment';
  postId = localStorage.getItem('postId');
  token = localStorage.getItem('token');
  private apiUrlComments = 'http://localhost:3000/api/post/'+this.postId+'/comments'
  data: any = {};

  constructor(private http: HttpClient, private router: Router) {
    this.getComments();
  }

  getComments(){
    return this.http.get(this.apiUrlComments, {
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).subscribe(
      res => {
        this.data = res;
        console.log(this.data);
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
    this.router.navigateByUrl('/feed');
  }

}

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
  post: any = {};
  toggle = '';

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
        this.post = res;
        console.log(this.post);
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
        console.log('comments: ' ,this.comments);
      },
      err => {
        console.log(err)
      }
    )
  }

  publishComment(commentText){

    var alertSucc = (<HTMLInputElement>document.getElementById('alertSucc'));
    var alertErr = (<HTMLInputElement>document.getElementById('alertErr'));

    return this.http.post(this.apiUrlComments, {
      
      "text": commentText

    },{
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).subscribe(
      res => { 
        console.log(res);
        alertSucc.style.display = "block";
        this.showAlert(alertSucc);
        this.getComments();
        (<HTMLInputElement>document.getElementById('commentText')).value = ""
      },
      err => {
        console.log(err)
        alertSucc.style.display = "none";
        alertErr.style.display = "block";
        this.showAlert(alertErr);
      }
    );
  }

  showAlert(alert) {
    var count = 2; // set secconds
    var counter = setInterval(function() {
      alert.style.display = "none"
        //clearInterval(counter) // stop interval
    }, 1000 * count);
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

  editPost(title, content) {
  
    return this.http.put(this.apiUrlPosts, {
      
      "title": title,
      "content": content

    },{
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).subscribe(
      res => { 
        this.toggle = ''
        this.getPost();
      },
      err => {
        console.log(err)
      }
    );
  }

  toggleEdit(id) {
    if(this.toggle == ''){
      this.toggle = id;
    }
    else{
      this.toggle = ''
    }
  }

  deleteComment(commentId) {
    return this.http.delete(this.apiUrlComments+'/'+commentId,{
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).subscribe(
      res => { 
        console.log(res);
        this.getComments();
      },
      err => {
        console.log(err)
      }
    );
  }

  editComment(commentId, text) {
    
    return this.http.put(this.apiUrlComments+'/'+commentId, {
      
      "text": text

    },{
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).subscribe(
      res => { 
        this.toggle = ''
        this.getComments();
      },
      err => {
        console.log(err)
      }
    );
  }

}

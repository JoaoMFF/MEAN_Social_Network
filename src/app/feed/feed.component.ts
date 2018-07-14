import { Component} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  
  title = 'feed';
  private apiUrlPOST = 'http://localhost:3000/api/post'
  pageUrl = this.router.url;
  splitUrl = this.pageUrl.split("/feed/page/");
  data: any = {};
  dataComment: any = {};
  nameUser = localStorage.getItem('nomeuser');
  token = localStorage.getItem('token');

  constructor(private http: HttpClient, private router: Router) {
    
    this.getPosts(this.splitUrl[1]);
  }

  getPosts(page) {
    return this.http.get('http://localhost:3000/api/post?page='+page+'&limit=15', {
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).subscribe(
      res => {
        console.log(res);
        this.data = res;

      },
      err => {
        console.log(err)
      }
    )
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  logs() {
    if(this.token){
      this.router.navigateByUrl('/logs');
    }
  }

  publishPost() {
    var titleInput = (<HTMLInputElement>document.getElementById('postTitle')).value;
    var contentInput = (<HTMLInputElement>document.getElementById('postContent')).value;

    return this.http.post(this.apiUrlPOST, {
      
      "title": titleInput,
      "content": contentInput

    },{
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).subscribe(
      res => { 
        console.log(res);
        this.getPosts(this.splitUrl[1]);
      },
      err => {
        console.log(err)
      }
    );
  }

  goToComment(postId) {
    
    console.log('PostId ' + postId);
    localStorage.setItem('postId', postId);

    this.router.navigateByUrl('/feed/'+postId+'/comments');
    
  }

}

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
  userEmail = localStorage.getItem('userEmail');
  nameUser = localStorage.getItem('nomeuser');
  token = localStorage.getItem('token');
  toggle = '';

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

  toggleEdit(id) {
    if(this.toggle == ''){
      this.toggle = id;
    }
    else{
      this.toggle = ''
    }
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

  publishPost(title, content) {
    var alertSucc = (<HTMLInputElement>document.getElementById('alertSucc'));
    var alertErr = (<HTMLInputElement>document.getElementById('alertErr'));

    return this.http.post(this.apiUrlPOST, {
      
      "title": title,
      "content": content

    },{
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).subscribe(
      res => { 
        console.log(res);
        (<HTMLInputElement>document.getElementById('postTitle')).value = '';
        (<HTMLInputElement>document.getElementById('postContent')).value = '';
        alertSucc.style.display = "block";
        this.showAlert(alertSucc);
        this.getPosts(this.splitUrl[1]);
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

  goToComment(postId) {
    
    console.log('PostId ' + postId);
    localStorage.setItem('postId', postId);

    this.router.navigateByUrl('/feed/'+postId+'/comments');
    
  }

  editPost(postId, title, content) {
    return this.http.put(this.apiUrlPOST+'/'+postId, {
      
      "title": title,
      "content": content

    },{
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).subscribe(
      res => { 
        this.toggle = ''
        this.getPosts(this.splitUrl[1]);
      },
      err => {
        console.log(err)
      }
    );
  }

  deletePost(postId) {
    return this.http.delete(this.apiUrlPOST+'/'+postId,{
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

}

import { Component} from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  
  title = 'feed';
  private apiUrlGET = 'http://localhost:3000/api/post?page=1&limit=15';
  private apiUrlPOST = 'http://localhost:3000/api/post'
  data: any = {};
  nameUser = localStorage.getItem('nomeuser');
  token = localStorage.getItem('token');

  constructor(private http: HttpClient, private router: Router) {
    this.getPosts();
  }

  getData() {
    
    return this.http.get(this.apiUrlGET, {
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + this.token)
    }).pipe(map(data => data))
  }

  getPosts() {
    
    this.getData();

    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
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
    var titleInput = (<HTMLInputElement>document.getElementById('commentTitle')).value;
    var contentInput = (<HTMLInputElement>document.getElementById('commentContent')).value;

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
        location.reload();
      },
      err => {
        console.log(err)
      }
    );
  }
}

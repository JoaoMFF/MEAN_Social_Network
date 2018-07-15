import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {
  title = 'logs';
  private apiUrl = 'http://localhost:3000/api/user/logs';
  log: any = {};

  constructor(private http: HttpClient, private router: Router) {
    this.getLogs();
  }

  getLogs() {
    var token = localStorage.getItem('token');

    return this.http.get(this.apiUrl, {
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + token)
    }).subscribe(
      data => {
        console.log(data);
        this.log = data;
      },
      err => {
        console.log(err)
      }
    );
  }

  goToFeed() {
    this.router.navigateByUrl('/feed/page/1');
  }

  goToPost(postId) {
    localStorage.setItem('postId', postId);

    this.router.navigateByUrl('/feed/'+postId+'/comments');
  }

}

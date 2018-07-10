import { Component} from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  title = 'feed';
  private apiUrl = 'http://localhost:3000/api/post?page=1&limit=15';
  data: any = {};

  constructor(private http: HttpClient) {
    this.getPosts();
  }

  getData() {
    var token = localStorage.getItem('token');
    return this.http.get(this.apiUrl, {
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer ' + token)
    }).pipe(map(data => data))
  }

  getPosts() {
    this.getData();

    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }



}

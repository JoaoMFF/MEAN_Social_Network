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
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl, {
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNDI2ODk1ODBhYjA4MDg3NDMzM2Q2ZiIsImlhdCI6MTUzMTA3ODgyNSwiZXhwIjoxNTMxMTY1MjI1fQ.6EXpqwb9Bc9eb31TkQ6duNDmfIGxtHSfET0syFFaiXY')
    }).pipe(map(data => data))
  }

  getPosts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }


}

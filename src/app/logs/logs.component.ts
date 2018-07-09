import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {
  title = 'logs';
  private apiUrl = 'http://localhost:3000/api/user/logs';
  data: any = {};

  constructor(private http: HttpClient) {
    this.getLogs();
  }

  getData() {
    return this.http.get(this.apiUrl, {
      headers:
        new HttpHeaders()
          .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViNDM5NzgwOTk3NTJmMjg0MDY0Mjk2MiIsImlhdCI6MTUzMTE1NjM3NCwiZXhwIjoxNTMxMjQyNzc0fQ.TzEAJggE-7Gjqgi1CrmbdhOVfQwNhLWmiH1Qe7Nu2RU')
    }).pipe(map(data => data))
  }

  getLogs() {
    this.getData();

    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
    
  }

}

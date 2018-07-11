import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  title = 'login';
  data: any = {};

  constructor(private http: HttpClient, private router: Router) {
  }

  postLogin(){

    var emailInput = (<HTMLInputElement>document.getElementById('emailLogin')).value;
    var passInput = (<HTMLInputElement>document.getElementById('passwordLogin')).value;

    return this.http.post("http://localhost:3000/api/auth", {
      
      "email": emailInput,
      "password": passInput

    }).pipe(map(data => data))
  }

  saveToken() {
    this.postLogin();

    this.postLogin().subscribe(data => {
      console.log(data);
      this.data = data;
      
      if(this.data.token){
        localStorage.setItem('token', this.data.token);
        localStorage.setItem('nomeuser', this.data.name);
        this.router.navigateByUrl('/feed');
      }
    },
    err => {
      console.log(err)
    })
  }

}

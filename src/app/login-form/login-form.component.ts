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

  userLogin(){

    var emailInput = (<HTMLInputElement>document.getElementById('emailLogin')).value;
    var passInput = (<HTMLInputElement>document.getElementById('passwordLogin')).value;

    return this.http.post("http://localhost:3000/api/auth", {
      
      "email": emailInput,
      "password": passInput

    }).subscribe(
      res => {
        console.log(res);
        this.data = res;
        
        if(this.data.token){
          localStorage.setItem('token', this.data.token);
          localStorage.setItem('nomeuser', this.data.name);
          localStorage.setItem('userEmail', this.data.email);
          this.router.navigateByUrl('feed/page/1');
        }
      },
      err => {
        console.log(err)
      })
  }

}

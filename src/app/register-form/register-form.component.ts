import { Component} from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  title = 'register';

  constructor(private http: HttpClient) {
  }

  postRegister(){

    var emailInput = (<HTMLInputElement>document.getElementById('nomeRegister')).value;
    var nameInput = (<HTMLInputElement>document.getElementById('emailRegister')).value;
    var passInput = (<HTMLInputElement>document.getElementById('passwordRegister')).value;

    this.http.post("http://localhost:3000/api/auth/register", {
      
      "email": emailInput,
      "password": passInput,
      "name": nameInput

    }).subscribe(
      res => { 
        console.log(res);
      },
      err => {
        console.log(err)
      }
    );
  }
}

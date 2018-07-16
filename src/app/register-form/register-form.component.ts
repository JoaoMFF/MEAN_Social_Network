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
  data: any = {};
  alertDiv = (<HTMLInputElement>document.getElementById('alertSucc'))

  constructor(private http: HttpClient) {
  }

  userRegister(){

    var emailInput = (<HTMLInputElement>document.getElementById('emailRegister')).value;
    var nameInput = (<HTMLInputElement>document.getElementById('nomeRegister')).value;
    var passInput = (<HTMLInputElement>document.getElementById('passwordRegister')).value;

    var alertSucc = (<HTMLInputElement>document.getElementById('alertSucc'));
    var alertErr = (<HTMLInputElement>document.getElementById('alertErr'));

    this.http.post("http://localhost:3000/api/auth/register", {
      
      "email": emailInput,
      "password": passInput,
      "name": nameInput

    }).subscribe(
      res => { 
        console.log(res);
        this.data = res;
        (<HTMLInputElement>document.getElementById('emailRegister')).value = '';
        (<HTMLInputElement>document.getElementById('nomeRegister')).value = '';
        (<HTMLInputElement>document.getElementById('passwordRegister')).value = '';
        alertSucc.style.display = "block";
        this.showAlert(alertSucc);
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
}
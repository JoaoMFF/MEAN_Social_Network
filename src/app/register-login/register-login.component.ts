import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})
export class RegisterLoginComponent implements OnInit {

  constructor() { 
    localStorage.clear();
  }

  ngOnInit() {
  }

}

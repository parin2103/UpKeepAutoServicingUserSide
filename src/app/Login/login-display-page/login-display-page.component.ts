import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-display-page',
  templateUrl: './login-display-page.component.html',
  styleUrls: ['./login-display-page.component.css']
})
export class LoginDisplayPageComponent implements OnInit {

  loginForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        email_id:new FormControl([Validators.required,Validators.email]),
        password:new FormControl([Validators.required])
      }
    );
  }

  onLogin()
  {

  }
}

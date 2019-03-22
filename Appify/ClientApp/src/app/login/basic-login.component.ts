import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../shared/services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
//import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {

  email: string;
  password: string;
  errorMessage: string;
  loginForm: FormGroup;
  validateForm: boolean = false;
  rememberMe: boolean;

  constructor(private _service: AuthenticationService, private router: Router) {
   
  }

  createForm() {
    this.loginForm = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  login() {
    this.validateForm = true;
    this.errorMessage = '';
    if (this.loginForm.valid) {
      var obj = { Email: this.loginForm.controls.Email.value, Password: this.loginForm.controls.password.value };
      this._service.login(obj, this.rememberMe).subscribe(response => {
        if (!response.isSuccess) {
          this.errorMessage = "That Username or password is incorrect";
        }
      });
    }
  }

  ngOnInit() {
    this.createForm();
  }
}

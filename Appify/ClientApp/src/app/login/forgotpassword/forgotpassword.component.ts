import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'forgotpassword',
  templateUrl: './forgotpassword.component.html',
})
export class ForgotPasswordComponent implements OnInit {

  email: string;
  errorMessage: string;
  loginForm: FormGroup;
  validateForm: boolean = false;
  constructor( private router: Router,private _service: AuthenticationService) { }

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
    });
  }

  forget() {
    this.errorMessage = '';
    this.validateForm = true;
    if (this.loginForm.valid) {
      var obj = this.loginForm.value;
      this._service.forgotPassword(obj).subscribe(response => {
        if (response.isSuccess) {
           this.errorMessage = "Reset Link is Provided on your E-Mail Address";
        }
        else{
             this.errorMessage = "That Username  incorrect";

             }
         });
      }
    }

  ngOnInit() {
    this.createForm();
  }
}

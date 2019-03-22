import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'resetpassword',
  templateUrl: './resetpassword.component.html',
})
export class ResetPasswordComponent implements OnInit {

  email: string;
  confirmpassword: string;
  password: string;
  errorMessage: string;
  loginForm: FormGroup;
  validateForm: boolean = false;


  constructor( private router: Router,private _service: AuthenticationService, private route: ActivatedRoute) { 

    router.events.subscribe((response) => {
        this.email = route.snapshot.params['email'];
      });
  }

  createForm() {
    this.loginForm = new FormGroup({
        confirmpassword: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),

    });
  }

  reset() {
    this.errorMessage = '';
    this.validateForm = true;
    if (this.loginForm.valid) {

        if (this.loginForm.controls.password.value == this.loginForm.controls.confirmpassword.value){
            console.log("Password Matched");
            var obj =  { Password: this.loginForm.controls.password.value, email:this.email};
            this._service.resetPassword(obj).subscribe(response => {
              if (response.isSuccess) {
                 this.errorMessage = "Password  Reset Successfully ";
                 this.confirmpassword = null;
                 this.password = null;
                 this.router.navigate(['']);

              }
              else{
                   this.errorMessage = "Some Error Occur";
                   }
               });
        }
        else{
            this.errorMessage = "Password Mismatched";

        }
    
      }
}

  ngOnInit() {
    this.createForm();
  }
}

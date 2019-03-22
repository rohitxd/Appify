import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DatepickerOptions } from 'ng2-datepicker';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  email: string;
  password: string;
  errorMessage: string;
  successMessage: string;
  registerForm: FormGroup;
  validateForm: boolean = false;
  states: any[] = [];
  cities: any[] = [];
  countries: any[] = [];
  options: DatepickerOptions = {
   maxDate: new Date(Date.now()), // maximum selectable date
  };

  constructor(private _service: AuthenticationService, private router: Router) { 
console.log(this.createForm);

  }

  createForm() {
    this.registerForm = new FormGroup({
      adminEmail: new FormControl('', [Validators.required,Validators.email]),
      adminFirstName: new FormControl('', Validators.required),
      adminLastName: new FormControl('', Validators.required),
      adminMobileNumber: new FormControl('', [Validators.required, Validators.pattern('^[2-9]{2}[0-9]{8}$')]),
      location: new FormControl('', Validators.required),
      area: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
      cityId: new FormControl('', Validators.required),
      stateId: new FormControl('', Validators.required),
      countryId: new FormControl('', Validators.required),
      corporateName: new FormControl('', Validators.required),
      corporateRegistrationDate: new FormControl('', Validators.required),
      corporateEmail: new FormControl('', [Validators.required,Validators.email]),
      corporateMobileNumber: new FormControl('', [Validators.required, Validators.pattern('^[2-9]{2}[0-9]{8}$')]),

    });
  }

  register() {
    console.log(this.registerForm);
    this.validateForm = true;
    this.errorMessage = '';
    this.successMessage = '';
    if (this.registerForm.valid) {
      this._service.register(this.registerForm.value).subscribe(response => {
        console.log(response);
        if (response.isSuccess) {
          this.successMessage = "Admin Registered successfully";
        //  this.router.navigate(['']);

        }
        else{
          if(response.data.isExist == true){
            this.successMessage = "User Already Exist";
          }
          else{
            this.errorMessage = "Some Error Encounter";
          }
        }
        
      });
    }
  }

  //getCities(stateId: number) {
  //  var obj = { PageNumber: 1, PageSize: 500, stateId: stateId };
  //  this.masterService.getCities(obj).subscribe(response => {
  //    this.cities = response.data;
  //  });
  //}

  //getStates(countryId: number) {
  //  var obj = { pageNumber: 1, PageSize: 500, CountryId: countryId };
  //  this.masterService.getStates(obj).subscribe(response => {
  //    this.states = response.data;
  //  });
  //}

  ngOnInit() {
    this.createForm();
    //var obj = { pageNumber: 1, PageSize: 500 };
    //this.masterService.getCountries(obj).subscribe(response => {
    //  this.countries = response.data;
    //});
  }
}

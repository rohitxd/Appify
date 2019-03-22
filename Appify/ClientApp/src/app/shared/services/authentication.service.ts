import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Broadcast } from './broadcast.service';

import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs/Observable';
//import { IAdminLogin } from './auth.interface';

@Injectable()
export class AuthenticationService {
  token: any = {
    auth_token: '',
    access_token: {
      userLoginId: ''
    }
  };

  tokenKey: string = "a5smm_utoken"
  details: any;

  constructor(private router: Router, private http: HttpClient, private broadcast: Broadcast) { }

  // login(obj): any {
  //   return this.http.post<any>(environment.apiBasePath + '/AdminLogin/Login', obj, { observe: 'response' }).subscribe(response => {
  //     this.details = response.body;
  //     this.authorizeToken(obj.Email);
  //     this.navigateBasedOnRole(this.details.data.roleId);
  //     return true;
  //   },
  //     (err) => {
  //       if (err.error instanceof Error) {
  //         console.log('An error occurred on the client side', err.error.message);
  //       } else {
  //         console.log(`Backend returned code ${err.status}, body was: ${err.error} (server error)`)
  //       }
  //       return false;
  //     });
  // }

  authorizeToken(username) {
    //return this.http.post<any>(environment.apiBasePath + '/Token', { "Email": username }, { observe: 'response' }).subscribe(response => {
    //  if (response.body) {
    this.token.auth_token = ''; // response.body.token;
    this.token.access_token = {
      userLoginId: this.details.data.userLoginId
    }

    this.setCorporate();
    this.setToken(this.token);
    this.setAdminDetails();
    this.navigateBasedOnRole(1); //this.details.data.roleId);
    // }
    //},
    //  (err) => {
    //    if (err.error instanceof Error) {
    //      console.log('An error occurred on the client side', err.error.message);
    //    } else {
    //      console.log(`Backend returned code ${err.status}, body was: ${err.error} (server error)`)
    //    }
    //  });
  }


  login(obj, rememberMe): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/userlogin/signin', obj)
      .do(res => {
        if (res.isSuccess) {
          this.details = res;
          this.authorizeToken(obj.Email);
          this.navigateBasedOnRole(1); //this.details.data.roleId);
          if (rememberMe) {
            document.cookie = this.tokenKey + "=" + JSON.stringify(this.token);
          }
        }
      })
      .catch(this.handleError);
  }

  register(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/AdminLogin/Registration', obj)
      .do(res => res)
      .catch(this.handleError);
  }

  forgotPassword(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/AdminLogin/ForgetPassword', obj)
      .do(res => res)
      .catch(this.handleError);
  }

  resetPassword(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/AdminLogin/ResetPassword', obj)
      .do(res => res)
      .catch(this.handleError);
  }

  getAdminProfile(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/adminLogin/GetProfile', obj)
      .do(res => res)
      .catch(this.handleError);
  }

  getSuperAdminProfile(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/adminLogin/GetSuperAdminProfile', obj)
      .do(res => res)
      .catch(this.handleError);
  }

  updateAdminProfile(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/adminLogin/UpdateProfile', obj)
      .do(res => res)
      .catch(this.handleError);
  }
  updateCorporateAdminProfile(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/adminLogin/UpdateCorporate', obj)
      .do(res => res)
      .catch(this.handleError);
  }

  createUsers(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/AdminLogin/CreateUser', obj)
      .do(res => res)
      .catch(this.handleError);
  }

  getUsers(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/AdminLogin/GetUsers', obj)
      .do(res => res)
      .catch(this.handleError);
  }
  deleteUser(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/AdminLogin/deleteUser', obj)
      .do(res => res)
      .catch(this.handleError);
  }


  getAllCompanies(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/Corporate/GetAll', obj)
      .do(res => res)
      .catch(this.handleError);
  }
  deletecompany(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/Corporate/Delete', obj)
      .do(res => res)
      .catch(this.handleError);
  }

  addCorporateLogo(obj): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('CorporateId', obj.CorporateId);
    formData.append('UploadFile', obj.file, obj.file.name);

    return this.http.post<any>(environment.apiBasePath + '/corporate/UploadLogo', formData)
      .do(res => res)
      .catch(this.handleError);
  }

  addCorporateLicense(obj): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('CorporateId', obj.CorporateId);
    formData.append('UploadFiles', obj.file, obj.file.name);

    return this.http.post<any>(environment.apiBasePath + '/corporate/UploadLicenses', formData)
      .do(res => res)
      .catch(this.handleError);
  }

  uploadProfile(obj): Observable<any> {

    const formData: FormData = new FormData();
    formData.append('AdminLoginId', obj.adminLoginId);
    formData.append('UploadFile', obj.file, obj.file.name);

    return this.http.post<any>(environment.apiBasePath + '/AdminLogin/UploadImage', formData)
      .do(res => res)
      .catch(this.handleError);
  }
  deletecompanyLicense(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/Corporate/DeleteLicense', obj)
      .do(res => res)
      .catch(this.handleError);
  }


  actionforStatus(obj): Observable<any> {
    return this.http.post<any>(environment.apiBasePath + '/Corporate/PerformAction', obj)
      .do(res => res)
      .catch(this.handleError);
  }

  setCorporate() {
    // if (this.details.data.associations.length > 0) {
    this.token.access_token.corporateId = this.details.data.corporateId;
    this.token.access_token.corporateName = this.details.data.corporateName;

    // }
  }

  navigateBasedOnRole(roleId) {
    this.router.navigate(['admin/dashboard']);
  }


  logout() {
    this.removeToken();
    document.cookie = this.tokenKey + "=" + "";
    this.router.navigate(['login']);
    this.broadcast.broadcast('is-authenticated', false);
  }

  getToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey));
  }

  getAuthToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey))['auth_token'];
  }

  setToken(token) {
    localStorage.setItem(this.tokenKey, JSON.stringify(token));
    this.broadcast.broadcast(this.tokenKey, JSON.stringify(token));
  }

  setAdminDetails() {
    localStorage.setItem("adLogDeta", JSON.stringify(this.details));
  }

  getAdminDetails() {
    return JSON.parse(localStorage.getItem("adLogDeta"));
  }

  getAccessToken() {
    return JSON.parse(localStorage.getItem(this.tokenKey))['access_token'];
  }

  isAuthenticated() {
    let token = localStorage.getItem(this.tokenKey);

    if (token) {
      return true;
    }
    else {
      return false;
    }
  }

  removeToken() {
    localStorage.clear();
  }



  private handleError(error: HttpErrorResponse) {
    console.error(error);
    let errorMessage = '';
    if (error.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${error.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}



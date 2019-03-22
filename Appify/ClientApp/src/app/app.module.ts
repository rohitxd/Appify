import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {SelectOptionService } from './shared/elements/select-option.service';
import { NgHttpLoaderModule } from 'ng-http-loader/ng-http-loader.module';
import { NgxEditorModule } from 'ngx-editor';
import { NgDatepickerModule, DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuItems } from './shared/menu-items/menu-items';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from './shared/services/authentication.service';
import { ApiInterceptorService } from './shared/services/api-interceptor.service';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { Broadcast } from './shared/services/broadcast.service';


import { AppComponent } from './app.component';

import { AdminDefaultModule} from './admin/default/default.module';

import { BasicLoginComponent } from './login/basic-login.component';
import { RegisterComponent } from './login/register/register.component';


import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './layout/all-layout/layout.component';
import { BreadcrumbsComponent } from './layout/all-layout/breadcrumbs/breadcrumbs.component';
import { ForgotPasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './login/resetpassword/resetpassword.component';
import 'rxjs/Rx';
import { CommonModule } from '@angular/common';


//import { SuperadminModule } from './superadmin/superadmin.module';

@NgModule({
  declarations: [
    AppComponent,
    BasicLoginComponent,
    LayoutComponent,
    BreadcrumbsComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    SharedModule,
    NgHttpLoaderModule,
    NgxEditorModule,
    NgDatepickerModule,
    AdminDefaultModule,CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ApiInterceptorService,
    multi: true
  },
    SelectOptionService,
    AuthenticationService,
    AuthGuardService,
    Broadcast,
    MenuItems],
  bootstrap: [AppComponent]
})
export class AppModule { }

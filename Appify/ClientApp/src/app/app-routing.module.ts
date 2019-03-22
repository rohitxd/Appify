import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLoginComponent } from './login/basic-login.component';
import { LayoutComponent } from './layout/all-layout/layout.component';
import { RegisterComponent } from './login/register/register.component';
import { ForgotPasswordComponent } from './login/forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './login/resetpassword/resetpassword.component';





const routes: Routes = [
  {
    path: '',
    component: BasicLoginComponent, pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'resetPassword/:email',
    component: ResetPasswordComponent
  },
  {
    path: 'admin',
    component: LayoutComponent,
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      //{
      //  path: '',
      //  redirectTo: 'dashboard/default',
      //  pathMatch: 'full'
      //},
      {
        path: '',
        loadChildren: './admin/admin.module#AdminModule'
      },
      {
        path: 'navigation',
        loadChildren: './layout/navigation/navigation.module#NavigationModule'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

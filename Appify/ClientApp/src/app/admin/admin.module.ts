import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { NgDatepickerModule, DatepickerOptions } from 'ng2-datepicker';
import * as frLocale from 'date-fns/locale/fr';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    NgDatepickerModule
  ],
  declarations: []
})
export class AdminModule { }

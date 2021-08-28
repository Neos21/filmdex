import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

/** Pages Module */
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent
  ]
})
export class PagesModule { }

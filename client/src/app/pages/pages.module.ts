import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AdminModule } from './admin/admin.module';

import { FilmsComponent } from './films/films.component';
import { LoginComponent } from './login/login.component';

/** Pages Module */
@NgModule({
  imports: [
    SharedModule,
    AdminModule
  ],
  declarations: [
    FilmsComponent,
    LoginComponent
  ]
})
export class PagesModule { }

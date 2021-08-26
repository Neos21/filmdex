import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FilmsTableRowComponent } from './home/components/films-table-row/films-table-row.component';

/** Pages Module */
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    FilmsTableRowComponent
  ]
})
export class PagesModule { }

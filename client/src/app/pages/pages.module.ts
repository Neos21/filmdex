import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FilmMetaComponent } from './home/component/film-meta/film-meta.component';

/** Pages Module */
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    FilmMetaComponent
  ]
})
export class PagesModule { }

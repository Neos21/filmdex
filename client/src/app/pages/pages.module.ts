import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FilmsComponent } from './films/films.component';

/** Pages Module */
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    FilmsComponent
  ]
})
export class PagesModule { }

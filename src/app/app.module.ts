import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { FilmsComponent } from './films/films.component';
import { SearchFormComponent } from './search-form/search-form.component';

/** App Module */
@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    FilmsComponent,
    SearchFormComponent
  ]
})
export class AppModule { }

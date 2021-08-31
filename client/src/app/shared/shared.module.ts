import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PublicApiFilmsService } from './services/public-api-films.service';
import { SearchFormComponent } from './components/search-form/search-form.component';

/** Shared Module */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PublicApiFilmsService
  ],
  declarations: [
    SearchFormComponent
  ],
  exports: [
    // Re-Export Modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Re-Export Components
    SearchFormComponent
  ]
})
export class SharedModule { }

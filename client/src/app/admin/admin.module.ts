import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';

import { CustomHttpInterceptor } from './interceptors/custom-http.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { AdminApiFilmsService } from './services/admin-api-films.service';

import { LoginComponent } from './login/login.component';
import { AdminFilmsComponent } from './admin-films/admin-films.component';
import { FilmMetaComponent } from './admin-films/components/film-meta/film-meta.component';
import { FilmRemoveComponent } from './admin-films/components/film-remove/film-remove.component';

/** Admin Module */
@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    },
    AuthGuard,
    AdminApiFilmsService
  ],
  declarations: [
    LoginComponent,
    AdminFilmsComponent,
    FilmMetaComponent,
    FilmRemoveComponent
  ]
})
export class AdminModule { }

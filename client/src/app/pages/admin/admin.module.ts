import { NgModule } from '@angular/core';

import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminApiFilmsService } from './services/admin-api-films.service';

import { AdminFilmsComponent } from './admin-films/admin-films.component';
import { FilmMetaComponent } from './admin-films/components/film-meta/film-meta.component';
import { FilmRemoveComponent } from './admin-films/components/film-remove/film-remove.component';

@NgModule({
  imports: [
    CoreModule,  // Interceptor を有効にするためインポートする
    SharedModule,
    AdminRoutingModule
  ],
  providers: [
    AdminApiFilmsService
  ],
  declarations: [
    AdminFilmsComponent,
    FilmMetaComponent,
    FilmRemoveComponent
  ]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { AdminFilmsComponent } from './admin-films/admin-films.component';

/** Routes */
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'films', component: AdminFilmsComponent, canActivate: [AuthGuard] },
  
  { path: ''     , redirectTo: '/admin/films', pathMatch: 'full' },  // /admin ルート
  { path: '**'   , redirectTo: '/admin/films' }  // /admin 配下の 404
];

/** Admin Routing Module */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

/** Routes */
const routes: Routes = [
  { path: 'login'   , component: LoginComponent },
  { path: 'home'    , component: HomeComponent, canActivate: [AuthGuard] },
  
  // 未指定時は `/home` へのリダイレクトにしておき AuthGuard によって必要に応じて `/login` に振り分けさせる
  { path: '', pathMatch: 'full', redirectTo: '/home' }
];

/** App Routing Module */
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

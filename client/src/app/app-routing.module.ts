import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmsComponent } from './pages/films/films.component';
import { LoginComponent } from './pages/login/login.component';

/** Routes */
const routes: Routes = [
  // Public な画面
  { path: 'films', component: FilmsComponent },
  { path: 'login', component: LoginComponent },
  
  // 配下に Routing Module を持つ画面はこのように定義しておかないと、その下のワイルドカードに負けてしまう
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(module => module.AdminModule) },
  
  { path: ''  , redirectTo: '/films', pathMatch: 'full' },  // ルート
  { path: '**', redirectTo: '/films'                    }   // 404
];

/** App Routing Module */
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

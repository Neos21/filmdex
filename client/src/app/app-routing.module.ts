import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmsComponent } from './pages/films/films.component';

/** Routes */
const routes: Routes = [
  // 配下に Routing Module を持つ画面はこのように定義しておかないと、その下のワイルドカードに負けてしまう
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule) },
  
  { path: ''  , component: FilmsComponent, pathMatch: 'full' },  // ルート
  { path: '**', redirectTo: '/' }  // 404
];

/** App Routing Module */
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

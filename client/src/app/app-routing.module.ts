import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { environment } from '../environments/environment';

import { FilmsComponent } from './pages/films/films.component';

/** Routes */
const routes: Routes = [
  { path: ''  , component: FilmsComponent, pathMatch: 'full' },  // ルート
  { path: '**', redirectTo: '/' }  // 404
];

// 本番環境では AdminModule を読み込まない
if(!environment.production) {
  console.log('FilmDex : Development Mode : Load AdminModule');
  routes.unshift(
    // 配下に Routing Module を持つ画面はこのように定義しておかないと、その下のワイルドカードに負けてしまう
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule) }
  );
}

/** App Routing Module */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: '',
  //   component: HomeComponent
  // },
  { path: 'lives', loadChildren: () => import('./views/lives/lives.module').then(m => m.LivesModule) },
  { path: 'users', loadChildren: () => import('./views/users/users.module').then(m => m.UsersModule) },
  {
    path: '',
    redirectTo: '/lives',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

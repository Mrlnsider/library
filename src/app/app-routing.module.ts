import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './containers/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'auth/register',
    loadChildren: './containers/register/register.module#RegisterModule'
  },
  {
    path: 'auth/login',
    loadChildren: './containers/login/login.module#LoginModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

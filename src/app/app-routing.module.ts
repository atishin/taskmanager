import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Authorize } from 'auth/index';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: 'error/:error',
    children: []
  },
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'dashboard',
    canActivate: [Authorize],
    children: []
  },
  {
    path: '**',
    redirectTo: '/error/404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

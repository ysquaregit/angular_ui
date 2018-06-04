import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';


export const AppRoutes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'home',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminComponentsModule'
  },{
    path: 'rate',
    loadChildren: './rate/rate.module#RateComponentsModule'
  }]
}, {
  path: '**',
  redirectTo: 'session/404'
}];

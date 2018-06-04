import { Routes } from '@angular/router';

import { RouteComponent } from './route/route.component';
import { AccesorialComponent } from './accesorial/accesorial.component';
import { DriverratesComponent } from './driverrates/driverrates.component';
import { ChassisComponent } from './chassis/chassis.component';

export const RateRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'route',
      component: RouteComponent
    },{
        path: 'accesorial',
        component: AccesorialComponent
    },{
        path: 'driverrates',
        component: DriverratesComponent
    },{
        path: 'chassis',
        component: ChassisComponent
    }]
  }
];

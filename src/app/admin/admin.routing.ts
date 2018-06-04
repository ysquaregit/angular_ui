import { Routes } from '@angular/router';

import{ UserComponent} from './user/user.component';
import{ CustomerComponent} from './customer/customer.component';
import{ ContainerComponent} from './container/container.component';
import{ DeadlineComponent} from './deadline/deadline.component';
import{ LocationComponent} from './location/location.component';
import { DriverComponent } from './driver/driver.component';

export const AdminRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'user',
      component: UserComponent
    },{
        path: 'container',
        component: ContainerComponent
    },{
        path: 'customer',
        component: CustomerComponent
    },{
        path: 'deadline',
        component: DeadlineComponent
    },{
        path: 'location',
        component: LocationComponent
    },{
        path: 'driver',
        component: DriverComponent
    }
]
  }
];

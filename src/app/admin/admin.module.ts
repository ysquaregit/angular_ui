import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import{ MatTableModule } from '@angular/material/table'
import { DemoMaterialModule } from '../shared/demo.module';
import { HttpClientModule }    from '@angular/common/http';
import 'hammerjs';

import { AdminRoutes } from './admin.routing';
import { UserComponent } from './user/user.component';
import { ContainerComponent } from './container/container.component';
import { CustomerComponent } from './customer/customer.component';
import { DeadlineComponent} from './deadline/deadline.component';
import { LocationComponent,CreateLocComponent,EditLocComponent } from './location/location.component';
import { DriverComponent } from './driver/driver.component';
import { UserInfoViewDialogComponent,UserEditDialogComponent,UserManagePermissionComponent } from './user/user.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { ContainerDialogComponent,ContainerEditComponent } from './container/container.component';
import { CustomerDialogComponent,CustomerEditDialogComponent,CustomerViewDialogComponent} from './customer/customer.component';
import { DeadlineDialogComponent,EditDeadlineComponent } from './deadline/deadline.component';
import { ConfirmationpopupComponent } from './confirmationpopup/confirmationpopup.component';

import {AdminService} from './admin.service';
import { AdduserComponent } from './adduser/adduser.component'

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    MatTableModule
  ],
  declarations: [   
    UserComponent,
    ContainerComponent,
    CustomerComponent,
    DeadlineComponent,
    LocationComponent,   
    DriverComponent, ManageuserComponent,
    UserInfoViewDialogComponent,
    UserEditDialogComponent,
    UserManagePermissionComponent,
    ContainerDialogComponent,
    ContainerEditComponent,
    CustomerDialogComponent,CustomerEditDialogComponent,
    CustomerViewDialogComponent,DeadlineDialogComponent,EditDeadlineComponent,
    CreateLocComponent,EditLocComponent, ConfirmationpopupComponent, AdduserComponent

    
  ],
  entryComponents: [    
    UserInfoViewDialogComponent,
    UserEditDialogComponent,
    UserManagePermissionComponent,
    ContainerDialogComponent,
    ContainerEditComponent,
    CustomerDialogComponent,
    CustomerEditDialogComponent,
    CustomerViewDialogComponent,
    DeadlineDialogComponent,
    EditDeadlineComponent,
    CreateLocComponent,
    EditLocComponent,
    ConfirmationpopupComponent,
    ManageuserComponent,AdduserComponent], 
    providers: [ AdminService ]
})

export class AdminComponentsModule {}

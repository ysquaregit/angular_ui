import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { DemoMaterialModule } from '../shared/demo.module';
import 'hammerjs';

import { RateRoutes } from './rate.routing';
import { RouteComponent } from './route/route.component';
import { AccesorialComponent,ACreateComponent,EditComponent } from './accesorial/accesorial.component';
import { DriverratesComponent,CdriverComponent } from './driverrates/driverrates.component';
import { ChassisComponent,CreateComponent } from './chassis/chassis.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RateRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
        RouteComponent,   
        AccesorialComponent,   
        DriverratesComponent,   
        ChassisComponent,
        CreateComponent,
        CreateComponent,EditComponent,
        CdriverComponent
    ],
    entryComponents: [CreateComponent,CreateComponent,EditComponent,CdriverComponent]
})

export class RateComponentsModule {}

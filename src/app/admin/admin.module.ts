import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AdminComponent } from './admin.component';
import { UserComponent } from './user/user.component';
import { RevenusComponent } from './revenus/revenus.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashbordComponent,
    UserComponent,
    RevenusComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

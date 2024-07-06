import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SidebarComponent,
    AdminComponent,
    DashbordComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule ,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

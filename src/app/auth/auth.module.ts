import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }

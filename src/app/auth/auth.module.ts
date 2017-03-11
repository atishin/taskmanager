import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginDialogComponent } from './login/login-dialog.component';
import { RegisterDialogComponent } from './register/register-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AuthRoutingModule
  ],
  entryComponents: [LoginDialogComponent, RegisterDialogComponent],
  declarations: [AuthComponent, LoginComponent, RegisterComponent, LoginDialogComponent, RegisterDialogComponent],
  exports: [AuthComponent, LoginComponent, RegisterComponent, LoginDialogComponent, RegisterDialogComponent]
})
export class AuthModule { }

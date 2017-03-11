import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { RegisterComponent } from './register.component';
import { MdSnackBar, MdDialogRef } from '@angular/material';

interface IRegisterVM {
  login: string;
  password: string;
}

@Component({
  selector: 'vc-register-dialog',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterDialogComponent extends RegisterComponent implements OnInit {

  constructor(
    authService: AuthService, 
    router: Router,
    snackBar: MdSnackBar,
    private dialogRef: MdDialogRef<RegisterDialogComponent>
  ) {
      super(authService, router, snackBar);
  }

  ngOnInit() {
  }

  protected processResult(result: string | boolean) {
    if (result === true) {
      this.dialogRef.close(true);
    } else {
      this.showMessage(<string>result);
    }
  }

  protected cancel() {
    this.dialogRef.close(false);
  }

}

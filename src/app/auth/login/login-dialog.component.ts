import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { LoginComponent } from './login.component';

interface ILoginVM {
  login: string;
  password: string;
}

@Component({
  selector: 'vc-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginDialogComponent extends LoginComponent implements OnInit {

  @HostBinding('class')
  private componentClassName = 'in-dialog';

  constructor(
    authService: AuthService,
    router: Router,
    route: ActivatedRoute,
    snackBar: MdSnackBar,
    private dialogref: MdDialogRef<LoginComponent>
  ) {
      super(authService, router, route, snackBar);
  }

  ngOnInit() {
    super.ngOnInit();
  }

  protected successSignIn(result) {
      if (result) {
          this.dialogref.close(result);
      }
  }

  protected cancel() {
    this.dialogref.close(false);
  }

}

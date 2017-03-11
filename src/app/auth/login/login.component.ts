import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { MdSnackBar } from '@angular/material';

interface ILoginVM {
  login: string;
  password: string;
}

@Component({
  selector: 'vc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  protected model: Partial<ILoginVM> = {};

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MdSnackBar
  ) { }

  ngOnInit() {

  }

  public async signIn() {
    const res = await this.authService.signIn(this.model.login, this.model.password);
    if (res === true) {
      let url = this.route.snapshot.queryParams['redirectUrl'];
      if (url === undefined || url === null || url === '') {
        url = '/';
      }
      this.successSignIn({result: true, redirectUrl: url});
    } else {
      this.showMessage(<string>res);
    }
  }

  protected successSignIn(result) {
    if (result.result) {
      this.router.navigate(['/']);
    }
  }

  protected cancel() {
    this.router.navigate(['/']);
  }

  protected showMessage(message: string) {
    this.snackBar.open(message, null, {
      duration: 3000
    });
  }
}

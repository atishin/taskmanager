import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { MdSnackBar } from '@angular/material';

interface IRegisterVM {
  login: string;
  password: string;
}

@Component({
  selector: 'vc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  protected model: Partial<IRegisterVM> = {};
  constructor(private authService: AuthService, private router: Router, protected snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  public async register() {
    try {
      const result = await this.authService.register(this.model.login, this.model.password);
      this.processResult(result);
    } catch (ex) {
      this.processResult('Произошла ошибка');
    }
  }

  protected processResult(result: string | boolean) {
    if (result === true) {
      this.router.navigate(['/user/login'], {
        queryParams: {
          registered: true
        }
      });
    } else {
      this.showMessage(<string>result);
    }
  }

  protected showMessage(message: string) {
      this.snackBar.open(<string>message, null, {
        duration: 3000
      });
  }

  protected cancel() {
    this.router.navigate(['/']);
  }
}

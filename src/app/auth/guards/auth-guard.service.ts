import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, Route, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from './../auth.service';

@Injectable()
export class AuthGuardService implements CanLoad, CanActivate {

  public static Admin = 'Admin';
  public static User = 'User';

  constructor(private authService: AuthService, private router: Router, private location: Location) {}

  public async canLoad(route: Route) {
    const result = await this.checkRoute(route);
    if (!result) {
      this.router.navigate(['/user/login'], {queryParams: {
        hasNotAccess: true,
        redirectUrl: this.location.path()
      }});
    }
    return result;
  }

  public async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const result = await this.checkRoute(route);
    if (!result) {
      this.router.navigate(['/user/login'], {queryParams: {
        hasNotAccess: true,
        redirectUrl: this.location.path()
      }});
    }
    return result;
  }

  private async checkRoute(route: ActivatedRouteSnapshot | Route) {
    let result = await this.authService.isAuthentificated();
    return result;
  }
}

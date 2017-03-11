import { Injectable, EventEmitter } from '@angular/core';
import { Http, URLSearchParams, Headers, Response } from '@angular/http';
import * as moment from 'moment';
import { API_URL } from 'configuration';

import { StorageService } from 'helpers/index';

@Injectable()
export class AuthService {

  private userdata = this.storage.getItem(StorageService.USER_DATA) || {};
  public onAuthentificationChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private storage: StorageService, private http: Http) {}

  public async isAuthentificated(strict = false): Promise<boolean> {
    const promise = new Promise<boolean>(async (resolve, reject) => {
      let result = false;
      const token = this.storage.getItem<any>(StorageService.TOKEN);
      if (token === undefined || token === null) {
        result = false;
      } else {
        const date = moment(token['.expires']);
        result = date.isAfter(moment.now());
      }
      resolve(result);
    });

    return promise;
  }

  public getUserId() {
    console.log(this.userdata);
    return this.userdata['userId'];
  }

  public isInRole(role: string, strict = false): boolean {
    if (!this.userdata["roles"]) {
      return false;
    } else {
      return this.userdata["roles"].find(_role => _role === role) === role;
    }
  }
  public isInRoles(roles: string[], strict = false): boolean {
    return roles.every(role => this.isInRole(role));
  }

  public async signIn(login: string, password: string) {
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('userName', login || '');
    params.append('password', password || '');

    let response = null;
    try {
      response = await this.http.post(`${API_URL}/Token`, params.toString(), {
        headers: new Headers({
          'Content-type': 'application/x-www-form-urlencoded'
        })
      }).toPromise();
    } catch (ex) {
      throw ex;
      // const error = <Response>ex;
      // return error.json().error_description || 'Произошла ошибка';
    }

    const rawResponse = response.json();

    if (response.ok) {
      const result = {
        '.expires': new Date(rawResponse['.expires']),
        '.issued': new Date(rawResponse['.issued']),
        'access_token': rawResponse.access_token,
        userName: rawResponse.userName,
        userId: rawResponse.userId
      };

      const tokenData = {
        access_token: result.access_token,
        '.expires': result['.expires'],
        '.issued': result['.issued']
      };
      const userData = {
        userName: result.userName,
        userId: result.userId
      };
      this.userdata = userData;
      this.storage.setItem(StorageService.TOKEN, tokenData);
      this.storage.setItem(StorageService.USER_DATA, userData);
      this.onAuthentificationChanged.emit(true);
      return true;
    }
    return 'Неправильный логин или пароль';
  }

  public async register(login: string, password: string) {
    const promise = new Promise<boolean | string>(async (resolve, reject) => {
      const requestModel = {
        Email: login,
        Password: password,
        ConfirmPassword: password
      };
      let response;
      try {
        response = await this.http.post(`${API_URL}/api/Account/Register`, requestModel).toPromise();
        if (response.ok) {
          resolve(true);
        } else {
          resolve(response.json());
        }
      } catch (ex) {
        const error = <Response>ex;
        const errors = error.json();
        resolve(errors.ModelState.errors[0]);
      }
    });
    return await promise;
  }

  private clearStorage() {
    this.storage.removeItem(StorageService.USER_DATA);
    this.storage.removeItem(StorageService.TOKEN);
    this.onAuthentificationChanged.emit(false);
  }

  public signOut() {
    this.http.post(`${API_URL}/api/Account/Logout`, undefined);
    this.clearStorage();
  }

}

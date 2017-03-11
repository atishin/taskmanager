import { Injectable } from '@angular/core';
import { Headers, BaseRequestOptions } from '@angular/http';

import { StorageService } from './storage.service';

@Injectable()
export class DefaultRequestOptionsService extends BaseRequestOptions {

  constructor(private storage: StorageService) {
    super();
    this.setHeaders();
    this.storage.onItemChange.asObservable().subscribe(item => {
      if (item === StorageService.TOKEN) {
        this.setHeaders();
      }
    });
    this.storage.onItemChange.asObservable().subscribe(() => {
      this.setHeaders();
    });
  }

  private setHeaders() {
    this.headers = new Headers();
    const token = this.storage.getItem<any>(StorageService.TOKEN);
    if (token !== undefined && token != null && token.access_token !== undefined && token.access_token != null) {
      this.headers.append('Authorization', `Bearer ${token.access_token}`);
    }
  }

}

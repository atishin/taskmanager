import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import * as _ from 'lodash';

@Injectable()
export class InitializerService {

  private initialized = new Subject();
  private subscriptions: Subscription[] = [];
  public isInitialized = false;

  public static factory() {
    return new InitializerService();
  }

  constructor() { }

  public initialize() {
    this.isInitialized = true;
    this.initialized.next();
  }

  public run(func: () => void, clear = false) {
    if (this.isInitialized) {
      func();
    } else {
      if (clear) {
        this.unsubscribeAll();
      }
      const subscription = this.observable().subscribe(next => {
        func();
        subscription.unsubscribe();
        _(this.subscriptions).remove(subscription).commit();
      });
      this.subscriptions.push(subscription);
    }
  }

  private unsubscribeAll() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }

  public observable() {
    return this.initialized.asObservable();
  }
}

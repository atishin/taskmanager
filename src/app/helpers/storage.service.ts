import { Injectable, EventEmitter, FactoryProvider } from '@angular/core';

@Injectable()
export class StorageService {

  private static defaultStorage: Storage = localStorage;

  public static TOKEN = 'storage.token';
  public static USER_DATA = 'storage.userData';

  public onItemChange: EventEmitter<string> = new EventEmitter<string>();
  public onStorageCleaned: EventEmitter<void> = new EventEmitter<void>();

  private _storage: Storage = StorageService.defaultStorage;
  private get storage(): Storage {
    return this._storage || StorageService.defaultStorage;
  }
  private set storage(value: Storage) {
    this._storage = value;
  }

  public static factory() {
      return new StorageService();
  }

  constructor() { }

  public setItem(key: string, item: any);
  public setItem(key: string, item: any, storage: Storage);
  public setItem(key: string, item: any, storage: Storage = this.storage) {
    storage.setItem(key, JSON.stringify(item));
    this.onItemChange.emit(key);
  }

  public removeItem(key: string);
  public removeItem(key: string, storage: Storage);
  public removeItem(key: string, storage: Storage = this.storage) {
    storage.removeItem(key);
    this.onItemChange.emit(key);
  }

  public getItem<TResult>(key: string): TResult;
  public getItem<TResult>(key: string, storage: Storage): TResult;
  public getItem<TResult>(key: string, storage: Storage = this.storage): TResult {
    const item: TResult = JSON.parse(storage.getItem(key));
    return item;
  }

  public clear();
  public clear(storage: Storage)
  public clear(storage: Storage = this.storage) {
    storage.clear();
    this.onStorageCleaned.emit();
  }

  public setDefaultStorage(storage: Storage) {
    this.storage = storage;
  }

}

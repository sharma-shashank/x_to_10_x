import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetStoreValue, RemoveStoreValue } from '../stores/common.action';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  state: Observable<any>;

  constructor(private store: Store<any>) {
    this.state = this.store.select('store');
  }

  setToStore(storeKeyName: string, options: any) {
    const setAction = new SetStoreValue(storeKeyName, options);
    this.store.dispatch(setAction);
  }

  getFromStore(storeKeyName: string) {
    return this.state.pipe(mergeMap((data) => {
      return of(data[storeKeyName]);
    }));
  }

  removeInStore(storeKeyName: string) {
    const resetAction = new RemoveStoreValue(storeKeyName);
    this.store.dispatch(resetAction);
  }
}

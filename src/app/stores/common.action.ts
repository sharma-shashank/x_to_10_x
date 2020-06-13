import { Action } from '@ngrx/store';

export interface CustomAction extends Action {
  type: string;
  payload?: any;
  name?: string;
}

export enum StateActionTypes {
  setStoreValue = 'Set Store Value',
  getStoreValue = 'Get Store Value',
  resetStoreValue = 'Reset Store Value',
  removeStoreValue = 'Remove Item',
  clearStoreValues = 'Clear Store Values'
}

export class SetStoreValue implements CustomAction {
  payload: any;
  name: string;
  readonly type = StateActionTypes.setStoreValue;

  constructor(name: string, payload: any) {
    this.payload = payload;
    this.name = name;
  }
}

export class GetStoreValue implements CustomAction {
  name: string;
  readonly type = StateActionTypes.getStoreValue;

  constructor(name: string) {
    this.name = name;
  }
}

export class RemoveStoreValue implements CustomAction {
  payload: any;
  readonly type = StateActionTypes.removeStoreValue;

  constructor(payload: any) {
    this.payload = payload;
  }
}

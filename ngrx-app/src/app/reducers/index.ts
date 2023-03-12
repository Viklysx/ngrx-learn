import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { CounterState, countReducer } from './counter';

export interface State {
  counter: CounterState;
}

export const reducers: ActionReducerMap<State> = {
  counter: countReducer
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];

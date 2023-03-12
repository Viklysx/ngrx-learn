import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const clear = createAction('[COUNTER] clear');

export interface CounterState {
    count: number;
}

export const initialState: CounterState = {
    count: 0
}

export const countReducer = createReducer(
    initialState,
    on(increase, state => ({
        ...state, // копируем старое состояние
        count: state.count + 1
    })),
    on(decrease, state => ({
        ...state,
        count: state.count - 1
    })),
    on(clear, state => ({
        ...state,
        count: 0
    }))
)

export const featureSelector = createFeatureSelector<CounterState>('counter')// передаем ключ,под которым ожидаем получить нашу фичу. Получаем селектор, который четко возвращает определенный стейт

export const countSelector = createSelector(
    featureSelector,
    state => state.count
)
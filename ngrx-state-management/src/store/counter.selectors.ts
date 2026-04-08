import { createSelector } from "@ngrx/store";


export interface FeatureState {
    counter : number;
}

export interface AppState {
    counter : number;
}


export const selectFeature = (state : AppState) => state.counter;

export const selectFeatureCount = createSelector(
    selectFeature,

    (counter) => counter
)

import { createAction } from "@ngrx/store";


export const increament = createAction(' [Counter] Increament')

export const decreament = createAction(' [Counter] Decreament')

export const reset = createAction(' [Counter] Reset')
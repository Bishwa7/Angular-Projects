import { createAction, props } from "@ngrx/store";



export const loadUsers = createAction(
    " [User] Load Users",
    props<{users: any[]}>
)

export const loadUsersSuccess = createAction(
    " [User] Load Users Success",
    props<{users: any[]}>()
)


export const loadUsersFail = createAction(
    " [User] Load Users Fail",
    props<{error: string}>()
)



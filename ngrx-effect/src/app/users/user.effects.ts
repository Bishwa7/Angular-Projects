import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "./user.service";
import { loadUsers, loadUsersFail, loadUsersSuccess } from "./user.actions";
import { catchError, map, of, switchMap } from "rxjs";


@Injectable()

export class UserEffects{
    private actions$  = inject(Actions)

    // API Service
    private userService = inject(UserService)


    loadUsers$ = createEffect(()=> (
        this.actions$.pipe(
            ofType(loadUsers),
            switchMap(() => (
                this.userService.getUsers().pipe(
                    map((users) => loadUsersSuccess({users})),
                    catchError((error) =>
                    of(loadUsersFail({error: error.message })))
                )
            ))
        )
    ))
}
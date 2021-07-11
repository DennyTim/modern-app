import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";
import {DataPersistence} from "@nrwl/angular";
import {createEffect} from "@ngrx/effects";
import {Action} from "@ngrx/store";
import {map} from "rxjs/operators";

import {AbstractEffects, IActionEffectPayload, IActionForcePayload, IUser} from "@modern-app/shared/utils/interfaces";

import * as UserActions from './user.actions';
import {IUserApollo} from "../interfaces/user-apollo.interface";
import {IUserStoreFeatureKey} from "../interfaces/user-store-feature-key.interface";
import {IUserState} from "../interfaces/user-state.interface";
import {USER_FEATURE_KEY} from "./user.reducer";

@Injectable()
export class UserEffects extends AbstractEffects<IUserState> {
  loadUser$ = createEffect(() =>
    this.dataPersistence.fetch<IActionEffectPayload<IActionForcePayload>>(UserActions.loadUser, {
      run: (action, store) =>
        isPlatformBrowser(this.platformId) && (!this.getState(store).userLoadRun || action.payload.force)
          ? UserActions.loadUserRun
          : UserActions.loadUserCancel,
      onError: (action, error) => this.errorHandler(action, error),
    }),
  );

  loadUserRun$ = createEffect(() =>
    this.dataPersistence.fetch(UserActions.loadUserRun, {
      run: () =>
        this.userApollo.loadUser().pipe(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          map<IUser, Action>(payload => UserActions.loadUserSuccess({payload})),
        ),
      onError: (action, error) => this.errorHandler(action, error, UserActions.loadUserFailure),
    }),
  )

  constructor(
    private dataPersistence: DataPersistence<IUserStoreFeatureKey>,
    private userApollo: IUserApollo,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    super(USER_FEATURE_KEY);
  }
}

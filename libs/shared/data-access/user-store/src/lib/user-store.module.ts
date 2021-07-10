import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {ApolloServer} from "apollo-server-express";
import {UserEffects} from './+state/user.effects';

import * as fromUser from './+state/user.reducer';

//TODO delete stub after implementing
export interface IUserStoreOptions {
  apollo: string
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer),
    EffectsModule.forFeature([
      UserEffects,
      ApolloServer,
    ]),
  ],
})
export class UserStoreModule {
  static forRoot(options: Partial<IUserStoreOptions>): ModuleWithProviders<UserStoreModule> {
    return {
      ngModule: UserStoreModule,
      providers: []
    }
  }
}



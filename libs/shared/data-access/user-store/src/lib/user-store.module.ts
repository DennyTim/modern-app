import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {CommonModule} from '@angular/common'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {ApolloServer} from "apollo-server-express";

import * as fromUser from './+state/user.reducer'
import {UserEffects} from './+state/user.effects'
import {IUserStoreOptions} from './interfaces/user-store-options.interface'
import {IUserApollo} from './interfaces/user-apollo.interface'

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
      providers: [
        {
          provide: IUserApollo,
          useClass: options.apollo,
        } as Provider,
        {
          provide: IUserApollo,
          useClass: options.facade,
        } as Provider,
      ]
    }
  }
}



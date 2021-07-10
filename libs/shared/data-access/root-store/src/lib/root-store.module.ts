import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './+state/root-reducer';
import { rootInitialState } from './+state/root-initial-state';
import { StoreRouterStateSerializer } from './services/store-router-state-serializer.service';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, { initialState: rootInitialState }),
    RouterModule,
    StoreRouterConnectingModule.forRoot({
      serializer: StoreRouterStateSerializer,
    }),
  ],
})
export class RootStoreModule {}

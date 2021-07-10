import { Injectable } from '@angular/core';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterStateSnapshot } from '@angular/router';
import { IRouterUrlState } from '../interfaces/router-url-state.interface';

@Injectable()
export class StoreRouterStateSerializer
  implements RouterStateSerializer<IRouterUrlState>
{
  /**
   * Only return an object including the URL, params and query params instead of the entire snapshot
   *
   * @param routerState
   */
  serialize(routerState: RouterStateSnapshot): IRouterUrlState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    return { url, params, queryParams };
  }
}

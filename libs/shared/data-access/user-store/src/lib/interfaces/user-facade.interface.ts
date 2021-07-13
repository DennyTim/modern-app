import {Observable} from 'rxjs'
import {IUser} from "@modern-app/shared/utils/interfaces";
import {ApolloError} from '@apollo/client'

/**
 * User facade
 */
export abstract class IUserFacade {

  /**
   * User entity observer
   */
  user$: Observable<IUser | null> | undefined;

  /**
   * User load status observer
   */
  userLoadRun$: Observable<boolean | null> | undefined;

  /**
   * User load error observer
   */
  userLoadFailure$: Observable<ApolloError | null> | undefined;

  /**
   * Load user action(dispatch)
   * @param force Force
   */
  abstract loadUser(force?: boolean): void
}

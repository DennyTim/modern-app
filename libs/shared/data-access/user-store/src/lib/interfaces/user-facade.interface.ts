import {Observable} from 'rxjs'
import {IUser} from "@modern-app/shared/data-access/interfaces";

/**
 * User facade
 */
export abstract class IUserFacade {

  /**
   * User observer
   */
  user$: Observable<IUser> | undefined;
}

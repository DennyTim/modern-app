import { ApolloError } from '@apollo/client';
import { IUser } from '@modern-app/shared/utils/interfaces';

/**
 * User-state interface
 */
export interface IUserState {
  /**
   * User entity
   */
  user: IUser | null;

  /**
   * User load status
   */
  userLoadRun: boolean;

  /**
   * User load error
   */
  userLoadFailure: ApolloError | null;
}

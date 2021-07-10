import {TApolloResponse} from "@modern-app/shared/data-access/interfaces";
/**
 * User Apollo
 */

export abstract class IUserApollo {

  /**
   * Load current user
   */
  abstract loadUser(queryParams: Record<string, unknown>): TApolloResponse
}

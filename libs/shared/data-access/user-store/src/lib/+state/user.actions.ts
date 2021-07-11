import {createAction} from '@ngrx/store';
import {ApolloError} from '@apollo/client';
import {IUser} from '@modern-app/shared/utils/interfaces';
import {payload, payloadForce} from '@modern-app/shared/utils/store';

export const loadUser = createAction('[IUser] Load User', payloadForce())
export const loadUserCancel = createAction('[IUser] Load User Cancel')
export const loadUserRun = createAction('[IUser] Load User Run')
export const loadUserSuccess = createAction('[IUser] Load User Success', payload<IUser>())
export const loadUserFailure = createAction('[IUser] Load User Failure', payload<ApolloError>())

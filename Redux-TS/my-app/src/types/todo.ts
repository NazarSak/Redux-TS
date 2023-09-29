export interface userState {
  user: any[];
  loading: boolean;
  error: null | string;
}

export type UserAction = FetchUserSuccess | FetchUser | FetchUserError;

export enum UserActionTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

export interface FetchUserSuccess {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}

export interface FetchUser {
  type: UserActionTypes.FETCH_USERS;
}

export interface FetchUserError {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

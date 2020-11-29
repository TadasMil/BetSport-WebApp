export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";

interface SetUserAction {
  type: typeof SET_USER;
  payload?: any;
}

interface RemoveUser {
  type: typeof REMOVE_USER;
  payload?: any;
}

export type UserActionTypes = SetUserAction | RemoveUser;

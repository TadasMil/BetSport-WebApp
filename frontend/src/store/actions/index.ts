export const SET_AUTH_ACTION = "SET_AUTH_STATE";

interface AuthAction {
  type: typeof SET_AUTH_ACTION;
  payload?: any;
}

export type AuthActionTypes = AuthAction;

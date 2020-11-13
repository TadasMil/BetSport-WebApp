export const SET_AUTH_ACTION = `SET_AUTH_STATE`;
export const REMOVE_AUTH_TOKEN = "REMOVE_AUTH_TOKEN";

interface AuthAction {
  type: typeof SET_AUTH_ACTION;
  payload?: any;
}

interface RemoveAuthAction {
  type: typeof REMOVE_AUTH_TOKEN;
  payload?: any;
}

export type AuthActionTypes = AuthAction | RemoveAuthAction;

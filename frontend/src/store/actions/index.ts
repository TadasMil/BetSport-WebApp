export const SET_USER = "SET_USER";
export const REMOVE_USER = "REMOVE_USER";
export const DISPLAY_SNACKBAR = "DISPLAY_SNACKBAR";
export const REMOVE_SNACKBAR = "REMOVE_SNACKBAR";

interface SetSnackbarAction {
  type: typeof DISPLAY_SNACKBAR;
  payload?: any;
}

interface RemoveSnackbarAction {
  type: typeof REMOVE_SNACKBAR;
  payload?: any;
}

interface SetUserAction {
  type: typeof SET_USER;
  payload?: any;
}

interface RemoveUser {
  type: typeof REMOVE_USER;
  payload?: any;
}

export type UserActionTypes = SetUserAction | RemoveUser;
export type SnackbarActionTypes = SetSnackbarAction | RemoveSnackbarAction;

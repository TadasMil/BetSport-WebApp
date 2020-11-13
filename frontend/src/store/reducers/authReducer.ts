import { Reducer } from "redux";
import { SET_AUTH_ACTION, REMOVE_AUTH_TOKEN } from "../actions/";
import { AuthActionTypes } from "../actions/index";

interface Auth {
  auth?: string;
}

const initialState: Auth = {
  auth: undefined,
};

const authReducer: Reducer<Auth, AuthActionTypes> = (
  state = initialState,
  action: AuthActionTypes
) => {
  switch (action.type) {
    case SET_AUTH_ACTION:
      return {
        ...state,
        auth: action.payload,
      };
    case REMOVE_AUTH_TOKEN:
      return {
        ...state,
        auth: undefined,
      };
  }
  return state;
};

export default authReducer;

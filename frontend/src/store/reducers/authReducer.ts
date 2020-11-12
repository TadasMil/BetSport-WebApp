import { Action, Reducer, AnyAction } from "redux";

import { STORE_AUTH_TOKEN } from "../actions/storeAuthToke";

interface Auth {
  auth?: string;
}

const initialState: Auth = {
  auth: undefined,
};

const authReducer: Reducer<Auth, Action> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case STORE_AUTH_TOKEN:
      return {
        ...state,
        auth: action.payload,
      };
  }
  return state;
};

export default authReducer;

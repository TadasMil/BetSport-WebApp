import { Reducer } from "redux";
import {
  DISPLAY_SNACKBAR,
  REMOVE_SNACKBAR,
  SnackbarActionTypes,
} from "../actions/";

interface IMessage {
  message: string | undefined;
}

const initialState: IMessage = {
  message: "",
};

export const snackbarReducer: Reducer<IMessage, SnackbarActionTypes> = (
  state = initialState,
  action: SnackbarActionTypes
) => {
  switch (action.type) {
    case DISPLAY_SNACKBAR:
      return {
        ...state,
        message: action.payload,
      };
    case REMOVE_SNACKBAR:
      return {
        ...state,
        message: "",
      };
  }

  return state;
};

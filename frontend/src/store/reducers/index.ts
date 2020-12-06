import { combineReducers } from "redux";
import { snackbarReducer } from "./snackbarReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

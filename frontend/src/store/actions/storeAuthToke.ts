import { SET_AUTH_ACTION, REMOVE_AUTH_TOKEN } from "./";

const storeAuthToken = (token: string) => ({
  type: SET_AUTH_ACTION,
  payload: token,
});

const removeAuthToken = () => ({
  type: REMOVE_AUTH_TOKEN,
});

export { storeAuthToken, removeAuthToken };

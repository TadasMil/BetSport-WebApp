import { SET_USER, REMOVE_USER, UPDATE_SCORE } from "./";
import { IUser } from "../../Interfaces/IUser";

const storeUser = (user: IUser) => ({
  type: SET_USER,
  payload: user,
});

const updateUserScore = (score: number) => ({
  type: UPDATE_SCORE,
  payload: score,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export { storeUser, removeUser, updateUserScore };

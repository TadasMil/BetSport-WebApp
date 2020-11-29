import { SET_USER, REMOVE_USER } from "./";
import { IUser } from "../../Interfaces/IUser";

const storeUser = (user: IUser) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export { storeUser, removeUser };

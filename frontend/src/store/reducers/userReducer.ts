import { Reducer } from "redux";
import { SET_USER, REMOVE_USER, UPDATE_SCORE } from "../actions/";
import { UserActionTypes } from "../actions/index";
import { IUser } from "../../Interfaces/IUser";

interface User {
  user?: IUser | undefined;
}

const initialState: User = {
  user: {
    accessToken: "",
    firstName: "",
    secondName: "",
    email: "",
    gamesPlayed: 0,
    gamesWon: 0,
    moneyWon: 0,
    moneyLost: 0,
    score: 0,
  },
};

const userReducer: Reducer<User, UserActionTypes> = (
  state = initialState,
  action: UserActionTypes
) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_SCORE:
      return {
        ...state,
        user: { ...state.user, score: action.payload },
      };
    case REMOVE_USER:
      return {
        ...state,
        user: undefined,
      };
  }
  return state;
};

export default userReducer;

import { User } from "../../shared/types/user-type";

export type UserReducerStateType = {
  currentUser?: User;
};

export type UserReducerActionType =
  | { type: "userReducer.SET_USER"; payload: User }
  | { type: "userReducer.CLEAR_USER" };

const initialState: UserReducerStateType = {
  currentUser: undefined,
};

const userReducer = (
  state = initialState,
  action: UserReducerActionType
): UserReducerStateType => {
  switch (action.type) {
    case "userReducer.CLEAR_USER":
      return { ...state, currentUser: undefined };
    case "userReducer.SET_USER":
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;

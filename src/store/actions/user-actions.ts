import { User } from "../../shared/types/user-type";
import { UserReducerActionType } from "../reducers/user-reducer";

export const clearUser = (): UserReducerActionType => ({
  type: "userReducer.CLEAR_USER",
});

export const setUser = (user: User): UserReducerActionType => ({
  type: "userReducer.SET_USER",
  payload: user,
});

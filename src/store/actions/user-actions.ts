import { User } from "../../shared/types/user-type";
import { UserReducerActionType } from "../reducers/user-reducer";
import { SagaActions } from "../sagas";

export const clearUser = (): UserReducerActionType => ({
  type: "userReducer.CLEAR_USER",
});

export const setUser = (user: User): UserReducerActionType => ({
  type: "userReducer.SET_USER",
  payload: user,
});

export const getUser = (): SagaActions => ({
  type: "userSaga.GET_USER",
});

export const postUser = (user: User): SagaActions => ({
  type: "userSaga.POST_USER",
  payload: user,
});

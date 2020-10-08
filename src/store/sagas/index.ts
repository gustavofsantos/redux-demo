import { all, takeLatest } from "redux-saga/effects";
import { User } from "../../shared/types/user-type";
import { asyncGetUser, asyncPostUser } from "./user-saga";

export type SagaActions =
  | { type: "userSaga.GET_USER" }
  | { type: "userSaga.POST_USER"; payload: Partial<User> };

export default function* root() {
  yield all([
    takeLatest("userSaga.GET_USER", asyncGetUser),
    takeLatest("userSaga.POST_USER", asyncPostUser),
  ]);
}

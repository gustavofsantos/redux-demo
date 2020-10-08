import { call, put } from "redux-saga/effects";
import { SagaActions } from ".";
import { getUser, postUser } from "../../services/user";
import { setUser } from "../actions/user-actions";

export function* asyncGetUser() {
  const result = yield call(getUser);
  yield put(setUser(result));
}

export function* asyncPostUser(action) {
  const result = yield call(postUser, action.payload);
  yield put(setUser(result));
}

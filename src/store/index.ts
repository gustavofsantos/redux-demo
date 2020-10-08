import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";
import { UserReducerStateType } from "./reducers/user-reducer";

export type AppState = {
  user: UserReducerStateType;
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;

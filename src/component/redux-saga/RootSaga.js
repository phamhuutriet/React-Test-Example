import { all } from "redux-saga/effects";
import { CounterSaga } from "./CounterSaga";
import { HelloSaga } from "./HelloSaga";

export default function* RootSaga() {
  yield all([HelloSaga(), CounterSaga()]);
}

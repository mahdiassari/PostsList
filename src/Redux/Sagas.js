import { all } from "redux-saga/effects";
import PostSagas from "./Post/Sagas";

export default function* sagas(getState) {
  yield all([
    PostSagas(),
  ]);
}

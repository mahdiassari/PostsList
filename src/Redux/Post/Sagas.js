import { all, takeEvery, put, fork } from "redux-saga/effects";
import types from "./Types";
import Endpoints from "./Endpoints";
import Api from "../../Request/API/index";

export function* Posts() {
  yield takeEvery(types.GET_POSTS, function* ({ data }) {
    try {
      const response = yield Api.Get(Endpoints.Posts, {});
      yield put({
        type: types.GET_POSTS_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      yield put({
        type: types.GET_POSTS_FAIL,
      });
    }
  });
}

export function* PostDetails() {
  yield takeEvery(types.GET_POST_DETAILS, function* ({ data }) {
    try {
      const response = yield Api.Get(`${Endpoints.PostDetails}/${data}`);
      yield put({
        type: types.GET_POST_DETAILS_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      yield put({
        type: types.GET_POST_DETAILS_FAIL,
      });
    }
  });
}

export function* GetPostComments() {
  yield takeEvery(types.GET_POST_COMMENTS, function* ({ data }) {
    try {
      const response = yield Api.Get(
        `${Endpoints.GetPostComments}/${data}/comments`
      );
      yield put({
        type: types.GET_POST_COMMENTS_SUCCESS,
        data: response.data,
      });
    } catch (e) {
      yield put({
        type: types.GET_POST_COMMENTS_FAIL,
      });
    }
  });
}

export default function* PostSagas() {
  yield all([fork(Posts), fork(PostDetails), fork(GetPostComments)]);
}

import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_CATEGORIES_REQUEST,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from "../actions/categoryActions";

/**
 * Saga: fetchCategoriesSaga
 * Worker saga that performs the async fetching of categories.
 */
function* fetchCategoriesSaga() {
  try {
    const response = yield call(axios.get, "http://localhost:8080/categories");
    yield put(fetchCategoriesSuccess(response.data));
  } catch (error) {
    yield put(fetchCategoriesFailure(error.message));
  }
}

/**
 * Watcher Saga: watchFetchCategories
 * Watches for FETCH_CATEGORIES_REQUEST action and triggers fetchCategoriesSaga.
 */
export function* watchFetchCategories() {
  yield takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga);
}

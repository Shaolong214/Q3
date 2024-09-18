import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_CATEGORIES_REQUEST,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from '../actions/categoryActions';

function* fetchCategoriesSaga() {
  try {
    const response = yield call(axios.get, 'http://localhost:8080/categories');
    yield put(fetchCategoriesSuccess(response.data));
  } catch (error) {
    yield put(fetchCategoriesFailure(error.message));
  }
}

export function* watchFetchCategories() {
  yield takeLatest(FETCH_CATEGORIES_REQUEST, fetchCategoriesSaga);
}

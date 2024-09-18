import { all } from 'redux-saga/effects';
import { watchFetchCategories } from './categorySagas';

export default function* rootSaga() {
  yield all([watchFetchCategories()]);
}

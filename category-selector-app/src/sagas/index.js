import { all } from 'redux-saga/effects';
import { watchFetchCategories } from './categorySagas';

/**
 * Root Saga
 * Combines all sagas into a single root saga.
 */
export default function* rootSaga() {
  yield all([watchFetchCategories()]);
}

/**
 * Action Types
 * These constants represent the different types of actions
 * that can be dispatched related to categories.
 */

export const FETCH_CATEGORIES_REQUEST = "FETCH_CATEGORIES_REQUEST";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";

/**
 * Action Creators
 * Functions that create actions to be dispatched.
 */

// Action creator for initiating the fetch request via redux-saga
export const fetchCategoriesRequest = () => ({
  type: FETCH_CATEGORIES_REQUEST,
});

// Action creator for successful category fetch
export const fetchCategoriesSuccess = (categories) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  payload: categories, // The fetched categories data
});

// Action creator for failed category fetch
export const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  payload: error, // The error message
});

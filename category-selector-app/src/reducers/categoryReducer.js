import {
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
} from "../actions/categoryActions";

// Initial state for the category slice of the Redux store
const initialState = {
  categories: [], // Holds the categories data
  loading: false, // Indicates if categories are being loaded
  error: null, // Holds any error messages from fetching
};

/**
 * Category Reducer
 * Handles actions related to categories and updates the state accordingly.
 */
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_REQUEST:
      // When fetching starts, set loading to true and clear previous errors
      return { ...state, loading: true, error: null };
    case FETCH_CATEGORIES_SUCCESS:
      // On successful fetch, update categories and set loading to false
      return { ...state, loading: false, categories: action.payload };
    case FETCH_CATEGORIES_FAILURE:
      // On failure, store the error message and set loading to false
      return { ...state, loading: false, error: action.payload };
    default:
      // Return the current state for any unrelated actions
      return state;
  }
};

export default categoryReducer;

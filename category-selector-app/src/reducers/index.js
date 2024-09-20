import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";

/**
 * Root Reducer
 * Combines all reducers into a single root reducer.
 */
const rootReducer = combineReducers({
  category: categoryReducer,
});

export default rootReducer;

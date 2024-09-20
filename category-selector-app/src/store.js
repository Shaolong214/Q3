import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

/**
 * Configure the Redux store using Redux Toolkit's configureStore.
 * This simplifies store setup and integrates well with middleware and DevTools.
 */
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    // Use getDefaultMiddleware and add sagaMiddleware, disable thunk middleware
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools Extension in development
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;

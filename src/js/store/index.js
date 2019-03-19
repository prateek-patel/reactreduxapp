import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

export default store;

/* 
- getState for accessing the current state of the application
- dispatch for dispatching an action
- subscribe for listening on state changes

That’s everything you need to know for getting started with Redux. */

/**
 * To start off connecting Redux with React we’re going to use Provider.
 * Provider is an high order component coming from react-redux.
 * 
 * Using layman’s terms, Provider wraps up your React application and makes it aware of the entire Redux’s store.
 * 
 * 
 */
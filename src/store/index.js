import { createStore, combineReducers, applyMiddleware } from "redux";
import teeTimesReducer from "./tee_times/reducer";
import customerReducer from "./customers/reducer";

import thunk from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
  teeTimes: teeTimesReducer,
  customer: customerReducer
});

const middleware = [thunk, logger];

export default createStore(rootReducer, applyMiddleware(...middleware));

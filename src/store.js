import { createStore, combineReducers } from "redux";
import userInputReducer from "./reducers/userInputReducer";

const rootReducer = combineReducers({
  userInput: userInputReducer,
});

const store = createStore(rootReducer);

export default store;

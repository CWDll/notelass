import { legacy_createStore as createStore, combineReducers } from "redux";
import userInputReducer from "./reducer/userInputReducer";

const rootReducer = combineReducers({
  userInput: userInputReducer,
});

const store = createStore(rootReducer);

export default store;

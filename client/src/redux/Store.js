import { createStore, applyMiddleware } from "redux";
import RootReducer from "./RootReducer";
import thunk from "redux-thunk";

const middlewares = [thunk];
const store = createStore(RootReducer, applyMiddleware(...middlewares));

export default store;
import { combineReducers } from "redux";
import { userReducers } from "./userReducers";

export const rootReducer = combineReducers({
  user: userReducers,
});

export type RootReducer = ReturnType <typeof rootReducer>;

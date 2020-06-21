import { combineReducers } from "redux";

import userReducer from "./user/user.reducer.js";
import cartReducer from "./cart/card.reducer";
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});

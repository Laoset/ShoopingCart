//Redux persist
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
//permite crear el store de mi aplicacion
import { combineReducers, configureStore } from "@reduxjs/toolkit";

//Reducers que me traigo por default del userSlice
import userReducer from "../reducers/user/userSlice";
import cartReducer from "../reducers/cart/cartSlice";

//Mas de redux persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "notes"],
};
const rootReducer = combineReducers({
  user: userReducer,
  notes: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

//No es redux persists
export const store = configureStore({
  //Al estado user se le asigna el userReducer
  reducer: persistedReducer,
  middleware: [thunk],
});
export default store;

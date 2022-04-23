import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { userSigninReducer } from "./reducers/userReducer";
import {
  addFieldReducer,
  fieldsReducer,
  fieldReducer,
  updateFieldReducer,
  deleteFieldReducer,
} from "./reducers/fieldReducer";
import {
  addCropReducer,
  cropReducer,
  cropsReducer,
  deleteCropReducer,
  updateCropReducer,
} from "./reducers/cropReducers";

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const reducer = combineReducers({
  userSignin: userSigninReducer,
  fields: fieldsReducer,
  fieldCreate: addFieldReducer,
  field: fieldReducer,
  fieldUpdate: updateFieldReducer,
  fieldDelete: deleteFieldReducer,

  crops: cropsReducer,
  cropCreate: addCropReducer,
  crop: cropReducer,
  cropUpdate: updateCropReducer,
  cropDelete: deleteCropReducer,
});
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;

import Axios from "axios";
import {
  USER_SIGN_FAIL,
  USER_SIGN_REQUEST,
  USER_SIGN_SUCCESS,
} from "../constants/userConstants";

export const userSignin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGN_REQUEST, payload: { email, password } });
  try {
    const { data } = await Axios.post("/api/user/signin", { email, password });
    dispatch({ type: USER_SIGN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SIGN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

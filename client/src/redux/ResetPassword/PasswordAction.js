import axios from "axios";
import { PASSWORD_RESET_SUCCESS, PASSWORD_ERROR } from "./PasswordTypes";

export const passwordReset = (user) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    
    const { data } = await axios.put(process.env.REACT_APP_SERVER_API + `user/passwordreset`, user, config);

    dispatch({
      type: PASSWORD_RESET_SUCCESS,
      payload: data.message,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: PASSWORD_ERROR,
      payload: message,
    });
  }
};

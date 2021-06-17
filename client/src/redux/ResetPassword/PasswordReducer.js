import { PASSWORD_RESET_SUCCESS, PASSWORD_ERROR } from "./PasswordTypes";

const initialState = {
  success: false,
};

const PasswordReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        message: payload
      };

    case PASSWORD_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default PasswordReducer;

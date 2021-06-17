import axios from "axios";
import { ORDER_ERROR, ORDER_LIST } from "./OrderTypes";

export const listOrders = () => async (dispatch) => {
  try {
    const { data } = await axios.get(process.env.REACT_APP_SERVER_API + `order`)
    dispatch({
      type: ORDER_LIST,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: ORDER_ERROR,
      payload: message,
    });
  }
};

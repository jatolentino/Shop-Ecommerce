import { ORDER_LIST, ORDER_ERROR } from "./OrderTypes";

const INITIAL_STATE = {
  orders: [],
  error: {},
};

const OrderReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_LIST:
      return {
        ...state,
        orders: payload,
      };

    case ORDER_ERROR:
      return {
        error: payload,
      };

    default:
      return state;
  }
};

export default OrderReducer;

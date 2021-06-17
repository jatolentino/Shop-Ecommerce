import axios from "axios";

import { PRODUCT_LIST, PRODUCT_ERROR } from "./ProductTypes";

export const listProducts = (keyword='', pageNumber = '') => async (dispatch) => {
    try {
      const { data } = await axios.get(process.env.REACT_APP_SERVER_API + `products?keyword=${keyword}&pageNumber=${pageNumber}`);
      dispatch({
        type: PRODUCT_LIST,
        payload: data,
      });
      
    } catch (error) {
  
      dispatch({
        type: PRODUCT_ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

import { PRODUCT_LIST, PRODUCT_ERROR } from "./ProductTypes";


const initialState = {
  products: [],
  error: {},
};

const productReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_LIST:
      return {
        ...state,
        products: [...payload.products],
        pages: payload.pages,
        page: payload.page,
      };

    case PRODUCT_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default productReducer;

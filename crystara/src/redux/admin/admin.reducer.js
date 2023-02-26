import * as types from "./admin.types";

const initialState = {
  isLoading: false,
  isError: false,
  product: [],
  user:[],
};
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    // PRODUCT PART 

    case types.PRODUCT_LOADING:
      return { ...state, isLoading: true };
    case types.GET_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, product:payload };

    case types.PRODUCT_ERROR:
      return { ...state, isError: true, isLoading: false };


      // USER PART 

      case types.PRODUCT_LOADING:
      return { ...state, isLoading: true };
    case types.GET_USER_SUCCESS:
      return { ...state, isLoading: false, user:payload };

    case types.PRODUCT_ERROR:
      return { ...state, isError: true, isLoading: false };

    // // DELETE USER 

    // case types.DELETE_USER_SUCCESS:
    //   return { ...state, user: state.user.filter((item) => item.id !== id) };

      // DELETE PRODUCT 

    //   case types.DELETE_PRODUCT_SUCCESS:
    //   return { ...state, product: state.product.filter((item) => item.id !== payload) };
    default:
      return state;
  }
};


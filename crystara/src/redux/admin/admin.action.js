import axios from "axios";
import * as types from "./admin.types";


// FETCH THE PRODUCT DATA FROM API 

const fetchDataSuccess = (data) => {
  return {
    type: types.GET_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://naughty-frog-cummerbund.cyclic.app/rings"
    );
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};


//   FETCH USER DATA FROM API


const fetchUserSuccess = (data) => {
  return {
    type: types.GET_USER_SUCCESS,
    payload: data,
  };
};


export const fetchUser = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://naughty-frog-cummerbund.cyclic.app/user"
    );
    dispatch(fetchUserSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};


// DELETE USER REQUEST 

export const deleteUser = (id) => {
  return (dispatch) => {
    return axios.delete(`https://naughty-frog-cummerbund.cyclic.app/user/${id}`).then(() => {
      dispatch({ type:types.DELETE_USER_SUCCESS, id });
    });
  };
};

// DELETE PRODUCT REQUEST 

export const deleteProduct = (id) => {
  return (dispatch) => {
    return axios.delete(`https://naughty-frog-cummerbund.cyclic.app/rings/${id}`).then(() => {
      dispatch({ type:types.DELETE_PRODUCT_SUCCESS, id });
    });
  };
};
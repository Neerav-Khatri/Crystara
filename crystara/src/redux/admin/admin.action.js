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
      "https://mock-server-crystara.onrender.com/rings"
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
      "https://mock-server-crystara.onrender.com/user"
    );
    dispatch(fetchUserSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
};


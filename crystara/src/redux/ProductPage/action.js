import axios from "axios"
import * as types from "./actionTypes";


// Navbar functions

export const getAllProductsNavbarAPI=async()=>{
    let res = await axios.get(
      `https://mock-server-crystara.onrender.com/collection`
    );
    return res.data
}

export const getCountryFlag=async(country="in")=>{
    let res = await axios.get(`https://countryflagsapi.com/png/${country}`);
    return res.data
}


// redux functions for productPage


export const handleLoading = () => {
  return {type: types.isLOADING};
}

export const handleError = () => {
  return {type: types.isERROR};
}

export const getProducts = (type) => async(dispatch) => {
  dispatch(handleLoading);
  await axios
    .get(`https://mock-server-crystara.onrender.com/${type}`)
    .then((res) => {
      dispatch({ type: types.GET_PRODUCT, payload: res.data });
    })
    .catch((error) => {
      dispatch(handleError);
    });
}

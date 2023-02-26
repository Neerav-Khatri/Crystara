import axios from "axios"
import * as types from "./actionTypes";


// Navbar functions

export const getAllProductsNavbarAPI=async()=>{
    let res = await axios.get(`http://localhost:8080/collection`);
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

export const getProducts = () => async(dispatch) => {
  dispatch(handleLoading);
  await axios
    .get(`http://localhost:8080/arrival`)
    .then((res) => {
      dispatch({ type: types.GET_PRODUCT, payload: res.data });
    })
    .catch((error) => {
      dispatch(handleError);
    });
}

// export const postProduct = (data) => {
//   axios.post(`https://naughty-frog-cummerbund.cyclic.app/wishlist`, data)
//   .then((res) => console.log(res))
//   .catch((error) => console.log(error));
// }
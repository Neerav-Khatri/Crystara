import axios from "axios";
import * as types from "./actiontypes.login";

export const handleLoading = () => {
    return {type: types.isLOADING};
}
  
export const handleError = () => {
    return {type: types.isERROR};
}

export const registered = () => {
    return {type: types.REGISTER_USER};
}

export const registerUser = (data) => (dispatch) => {
    dispatch(handleLoading);
    axios
      .post(`https://modesens1.onrender.com/user/register`, data)
      .then((res) => {
        dispatch(registered);
      })
      .catch((error) => {
        console.log(error);
        dispatch(handleError);
      });
}

// export const loginUser = (data) => (dispatch) => {
//     dispatch(handleLoading);
//     axios
//       .get(
//         `https://mock-server-crystara.onrender.com/user?q=${data.email}&${data.password}`
//       )
     
//       .then((res) => {
//         dispatch({ type: types.USER_LOGIN, payload: res.data });
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch(handleError);
//       });
// }



export const loginUser = (data) => (dispatch) => {
  dispatch(handleLoading());  // Ensure loading state is triggered
  return axios.post("https://modesens1.onrender.com/user/login", data) // Use POST request for login
      .then((res) => {
          // Handle the response to pass the token and other data
          dispatch({ 
              type: types.USER_LOGIN, 
              payload: res.data  // Assuming response contains token and user data
          });
          return res.data;  // Return the response data (including token)
      })
      .catch((error) => {
          console.log(error);
          dispatch(handleError());
          throw error;  // Throw error so it can be caught in the frontend
      });
};











export const adminLogin = (data) => (dispatch) => {
    dispatch(handleLoading);
    axios
      .get(
        `https://mock-server-crystara.onrender.com/admin?q=${data.email}&${data.password}`
      )
      .then((res) => {
        dispatch({ type: types.ADMIN_LOGIN, payload: res.data });
      })
      .catch((error) => {
        console.log(error);
        dispatch(handleError);
      });
}






// // action.login.js
// export const REGISTER_USER = 'REGISTER_USER';
// export const LOGIN_USER = 'LOGIN_USER';

// // Register User Action
// export const registerUser = (data) => {
//   return {
//     type: REGISTER_USER,
//     payload: data,
//   };
// };

// // Login User Action
// export const loginUser = (data) => {
//   return {
//     type: LOGIN_USER,
//     payload: data,
//   };
// };

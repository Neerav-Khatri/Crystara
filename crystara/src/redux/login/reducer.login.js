// import * as types from "./actiontypes.login";

// const intialstate = {
//     user: {},
//     isAuth: false,
//     admin: {},
//     isLoading: false,
//     isError: false
// }

// export const loginReducer=(state = intialstate ,action)=>{

// switch(action.type){
//     case types.isLOADING : {
//         return {...state, isLoading : true};
//     };
//     case types.isERROR : {
//         return {...state, isLoading: false, isError: true};
//     };
//     case types.REGISTER_USER : {
//         return {...state, isLoading: false}
//     };
//     case types.USER_LOGIN : {
//         return {...state, isLoading: false, isAuth: true, user: action.payload[0]}
//     };
//     case types.ADMIN_LOGIN : {
//         return {...state, isLoading: false, admin: action.payload[0]}
//     };
//     default: return state
// }

// }





import * as types from "./actiontypes.login";

const intialstate = {
    user: {},
    isAuth: false,
    admin: {},
    isLoading: false,
    isError: false,
    token: null,  // Adding a token field to store the token
}

export const loginReducer = (state = intialstate, action) => {
    switch (action.type) {
        case types.isLOADING: {
            return { ...state, isLoading: true };
        }
        case types.isERROR: {
            return { ...state, isLoading: false, isError: true };
        }
        case types.REGISTER_USER: {
            return { ...state, isLoading: false };
        }
        case types.USER_LOGIN: {
            // Store the token from the response and mark the user as authenticated
            const { token, ...userDetails } = action.payload;
            if (token) {
                localStorage.setItem('authToken', token);  // Persist token in localStorage
            }
            return { 
                ...state, 
                isLoading: false, 
                isAuth: true, 
                user: userDetails, 
                token: token || state.token  // Add the token to the state
            };
        }
        case types.ADMIN_LOGIN: {
            return { ...state, isLoading: false, admin: action.payload[0] };
        }
        default: 
            return state;
    }
};

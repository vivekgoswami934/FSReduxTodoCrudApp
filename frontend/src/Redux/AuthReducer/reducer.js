import { GET_LOGIN_ERROR, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, POST_SIGNUP_ERROR, POST_SIGNUP_REQUEST, POST_SIGNUP_SUCCESS } from "./actionType";


let initialState = {
    token : "",
    isLoading : false,
    isError : true 
}

export const reducer = (state=initialState,action) => {
    const {type , payload } = action;
    console.log(payload)

    switch(type){

        case POST_SIGNUP_REQUEST : return {...state , isLoading : true , isError : false}
        case POST_SIGNUP_SUCCESS : return {...state , isLoading : false , isError : false}
        case POST_SIGNUP_ERROR : return {...state , isLoading : false , isError : true}



        case GET_LOGIN_REQUEST : return {...state , isLoading : true , isError : true}
        case GET_LOGIN_SUCCESS : return {...state , isLoading : false , isError : false , token : payload}
        case GET_LOGIN_ERROR : return {...state , isLoading : false , isError : true}



        default : return state ; 
    }
}
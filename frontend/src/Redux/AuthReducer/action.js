import axios from "axios";
import { GET_LOGIN_ERROR, GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, POST_SIGNUP_REQUEST, POST_SIGNUP_SUCCESS } from "./actionType";

const URL = "https://mern-6wgc.onrender.com";

export const signupAPI = (payload) => async (dispatch) => {
    console.log("signup function is called", payload)
    try {
        dispatch({ type: POST_SIGNUP_REQUEST })
        const data = await axios.post(`${URL}/auth/signup`, payload);
        dispatch({ type: POST_SIGNUP_SUCCESS, payload: data })
        console.log(data)
        return "Signup Successful"

    } catch (err) {

        console.log("Error while signup sending data at frontend", err);

    }
};

export const signinAPI = (payload) => async (dispatch) => {
    try {

        dispatch({type : GET_LOGIN_REQUEST})

        return await axios
            .post(`${URL}/auth/login`, payload)
            .then(
                (res) => {
                    res.data.token && localStorage.setItem("fstackTodoToken", res.data.token)
             dispatch({type : GET_LOGIN_SUCCESS , payload : res.data.token})
                    return "Login Successful"
                }
            );
    } catch (err) {
        console.log("Error while login sending data at frontend", err);
        dispatch({type : GET_LOGIN_ERROR})
        return "login failed"
    }
};
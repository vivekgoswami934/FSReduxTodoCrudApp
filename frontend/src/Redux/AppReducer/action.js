import axios from "axios";
import { GET_TODOS_SUCCESS } from "./actionType";


const URL = "https://mern-6wgc.onrender.com";



export const getTodoAPI = () => async (dispatch) => {
    const token = localStorage.getItem("fstackTodoToken");
    console.log("getuserapi", token);
    if (token) {
        try {
            const data =  await axios.get(`${URL}/all`, {
                headers: {
                    Authorization: ` Bearer ${token}`,
                },
            });

            console.log(data)

            dispatch({type : GET_TODOS_SUCCESS , payload : data.data})
        } catch (err) {
            console.log("Error while the getting the data from api", err);
        }
    } else {
        alert("You have not login yet");
        return
    }
};


export const addTodoAPI = (payload) => async (dispatch) => {

    const token = localStorage.getItem("fstackTodoToken");

    console.log("getuserapi", token);

    console.log("vivek ",token)
    if (token) {
        try {
            return await axios.post(`${URL}/add`, payload, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
        } catch (error) {
            console.log("Error while calling user api", error);
            return "Error"
        }
    } else {
        console.log("you have not login yet add user api");
        alert("token not found please login");

        return "not login yet"
    }
};
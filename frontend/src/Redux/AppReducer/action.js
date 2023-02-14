import axios from "axios";
import { GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./actionType";


const URL = "https://mern-6wgc.onrender.com";



export const getTodoAPI = () => async (dispatch) => {
    const token = localStorage.getItem("fstackTodoToken");
    console.log("getuserapi", token);
    if (token) {
        try {
            dispatch({type : GET_TODOS_REQUEST})
            const data =  await axios.get(`${URL}/all`, {
                headers: {
                    Authorization: ` Bearer ${token}`,
                },
            });
            dispatch({type : GET_TODOS_SUCCESS , payload : data.data})
        } catch (err) {
            dispatch({type : GET_TODOS_ERROR})
            console.log("Error while the getting the data from api", err);
            return "Error GET_DATA"
        }
    } else {
        dispatch({type : GET_TODOS_ERROR})
        alert("You have not login yet");
        return "Error GET_DATA"
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


export const deleteTodoAPI =  (id) => async (dispatch) =>  {

    const token = localStorage.getItem("fstackTodoToken");


    if (token) {
      try {
        console.log("delteing");
        return await axios.delete(`${URL}/${id}`, {
          headers: {
            Authorization: ` Bearer ${token}`,
          },
        });
      } catch (err) {
        console.log("Error while the delteting the data of a single user from api", err );
      }
    } else {
      console.log("delete else function called");
    }
  };
  
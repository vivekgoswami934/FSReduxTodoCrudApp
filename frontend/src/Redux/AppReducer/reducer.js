import { ADD_TODO_ERROR, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, DELETE_TODO_ERROR, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, UPDATE_TODO_ERROR, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS } from "./actionType";

let initialState = {
    isLoading : false,
    isError : false ,
    todos : []

}

export const reducer = (state= initialState,action) => {

    const {type , payload } = action;

    console.log(payload)

    switch(type){

        case GET_TODOS_REQUEST : return {...state , isLoading : true}
        case GET_TODOS_SUCCESS : return {...state , isLoading : false , todos : payload}
        case GET_TODOS_ERROR : return {...state , isLoading : false , isError : true}


        case ADD_TODO_REQUEST : return {...state , isLoading : true}
        case ADD_TODO_SUCCESS : return {...state , isLoading : false}
        case ADD_TODO_ERROR : return {...state , isLoading : false}


        case UPDATE_TODO_REQUEST : return {...state , isLoading : true}
        case UPDATE_TODO_SUCCESS : return {...state , isLoading : false}
        case UPDATE_TODO_ERROR : return {...state , isLoading : false , isError : true}


        case DELETE_TODO_REQUEST : return {...state , isLoading : true}
        case DELETE_TODO_SUCCESS : return {...state , isLoading : false}
        case DELETE_TODO_ERROR : return {...state , isLoading : false , isError : true}


        default : return state;
    }

}
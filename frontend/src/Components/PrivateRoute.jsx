import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

  const data = useSelector(state => state?.AuthReducer)

  const {token} = data
    console.log("token",data)


    if(!token?.length){
        return <Navigate to="/login" />
      }
    
      return children;
  
}

export default PrivateRoute;

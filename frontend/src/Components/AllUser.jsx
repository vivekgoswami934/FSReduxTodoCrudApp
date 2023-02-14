import { Button, styled, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteTodoAPI, getTodoAPI } from "../Redux/AppReducer/action";
import Navbar from "./Navbar";




const AllUser = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const data = ["a"]

  const {isLoading ,isError , todos } = useSelector(store => store.AppReducer)

   console.log(isLoading ,isError , todos )

  const deleteUser =  (id) => {

    dispatch(deleteTodoAPI(id)).then(()=> dispatch(getTodoAPI()))
   
  };
  const onclickthis = () => {
    navigate("/add")
  }

  useEffect(() => {
    dispatch(getTodoAPI());
  }, []);

  return<>
  <Navbar />

  {todos?.length > 0 && (
    <TableContainer>
      <TableHead>
        <Row>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>PhoneNo</TableCell>
          <TableCell></TableCell>
        </Row>
      </TableHead>
      <TableBody>
        {todos?.map((user, id) => (
          <TRow key={user._id}>
            <TableCell> {id + 1} </TableCell>
            <TableCell> {user.name} </TableCell>
            <TableCell> {user.username} </TableCell>
            <TableCell> {user.email} </TableCell>
            <TableCell> {user.phone} </TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: "12px" }}
                component={Link}
                to={`/edit/${user._id}`}
              >
                Update
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  deleteUser(user._id);
                }}
              >
                Delete
              </Button>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </TableContainer>
  )}
</>

  
};

export default AllUser;



const TableContainer = styled(Table)`
  width: 80%;
  margin: 30px auto 0px auto;
`;
const H1 = styled(Typography)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Row = styled(TableRow)`
  background-color: teal;
  & > th {
    color: whitesmoke;
    font-size: 20px;
  }
`;
const TRow = styled(TableRow)`
  & > td {
    font-size: 16px;
  }
`;
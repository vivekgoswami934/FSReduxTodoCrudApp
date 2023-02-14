import React from "react";
import { AppBar, Toolbar, styled, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
  display: flex;
  align-items: center;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

const Navbar = () => {
  
  const handleLogout = () => {
    localStorage.removeItem("curdAppToken");
    window.location.reload()
  };

  // console.log("navbar",localStorage.getItem("curdAppToken"))
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Tabs to="/"> <Button variant="contained">ALL TODOS</Button>  </Tabs>
          <Tabs to="/add"> <Button variant="contained">ADD TODOS</Button>  </Tabs>
          <Tabs to="/login">
            {localStorage.getItem("fstackTodoToken") ? (
              <Button variant="contained" color="error" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button variant="contained">Login</Button>
            )}
          </Tabs>
        </Toolbar>
        
      </Header>
    </>
  );
};

export default Navbar;

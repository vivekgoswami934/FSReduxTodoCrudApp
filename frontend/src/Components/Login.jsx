import React from "react";
import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { signinAPI, signupAPI } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const imageURL =
  "https://previews.123rf.com/images/aaamie/aaamie1607/aaamie160700024/60230534-access-management-authorize-software-authentication-login-form-system-vector-illustration.jpg";

const signupObj = {
  username: "",
  password: "",
  email: "",
};
const loginObj = {
  username: "",
  password: "",
};

const Login = ({ setTokenFun }) => {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [account, setAccount] = useState("login");
  const [signup, setSignup] = useState(signupObj);
  const [signin, setSignin] = useState(loginObj);


  const onChangeSignup = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };
  const onChangeSignin = (e) => {
    setSignin({ ...signin, [e.target.name]: e.target.value });
  };

  // signup function
  const onClickSignup = () => {
    console.log("function called")
    dispatch(signupAPI(signup)).then((res) => {
      if (res === "Signup Successful") {
        alert("Signup successful");
        toggleSignUp();
        window.location.reload()
      } else {
        alert("signup unsuccessful")
      }
    })

  };

  // login Function
  const onClickLogin = () => {
    console.log("login",signin);
    dispatch(signinAPI(signin)).then(res => {
      console.log(res)
      res === "Login Successful" ? alert("Login Successful") : alert("Login Failed")
      navigate("/")
    })
  }
    const toggleSignUp = () => {
      setAccount(account === "login" ? "signup" : "login");
    };

    return (
      <Component>
        <Box>
          <Image src={imageURL} alt="login" />
          {account === "login" ? (
            <Wrapper>
              <TextField
                required
                variant="standard"
                label="Enter Username"
                name="username"
                onChange={(e) => onChangeSignin(e)}
              />
              <TextField
                required
                variant="standard"
                label="Enter Password"
                name="password"
                onChange={(e) => onChangeSignin(e)}
              />
              <LoginButton
                variant="contained"
                onClick={onClickLogin}
                disabled={localStorage.getItem("curdAppToken")}
              >
                Login
              </LoginButton>
              <Text>OR</Text>
              <SignupButton
                onClick={() => toggleSignUp()}
                disabled={localStorage.getItem("curdAppToken")}
              >
                Create an account
              </SignupButton>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Name"
                name="name"
                onChange={(e) => onChangeSignup(e)}
              />
              <TextField
                variant="standard"
                label="Enter Username"
                name="username"
                onChange={(e) => onChangeSignup(e)}
              />
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                onChange={(e) => onChangeSignup(e)}
              />
              <SignupButton onClick={onClickSignup}>Signup</SignupButton>
              <Text>OR</Text>
              <LoginButton variant="contained" onClick={() => toggleSignUp()}>
                Already have an account
              </LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    );
  };

  export default Login;

  const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  /* margin-top: 30px; */
`;
  const Image = styled("img")({
    width: 100,
    margin: "auto",
    display: "flex",
    padding: "50px 0 0",
  });
  const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & button,
  & p {
    margin-top: 20px;
  }
`;
  const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: white;
  height: 40px;
  border-radius: 5px;
`;
  const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 40px;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 60%);
`;
  const Text = styled(Typography)`
  color: #878787;
  font-size: 17px;
  text-align: center;
`;



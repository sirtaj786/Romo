import { Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import { FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import style from "./Common.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signupAPI } from "../Redux/Auth/userActions";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email, password } = userData;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupAPI(userData));
    navigate("/signin");
  };
  return (
    <Box className={style.Signup}>
    <Box className={style.signup}>
      <FormControl>
        <Text mb="20px" fontWeight="bold" fontSize="3xl" textAlign="center">
          Create Account
        </Text>
        <FormLabel>Name</FormLabel>
        <Input
          value={name}
          name="name"
          type="text"
          onChange={handleChange}
          placeholder="Enter Name"
        />
        <FormLabel>Email address</FormLabel>
        <Input
          value={email}
          name="email"
          type="email"
          onChange={handleChange}
          placeholder="Enter Email"
        />
        <FormHelperText>We'll never share your email.</FormHelperText>
        <FormLabel>Password</FormLabel>
        <Input
          value={password}
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Enter Password"
        />
        <FormHelperText mb="40px">
          We'll never share your password.
        </FormHelperText>
        <Button
          onClick={handleSubmit}
          display="block"
          margin="auto"
          bg="#183661"
          color="white"
          _hover={{ bg: "#F2C119", color: "black" }}
        >
          Create Account
        </Button>
      </FormControl>
    </Box>
    </Box>
  );
};

export default Signup;

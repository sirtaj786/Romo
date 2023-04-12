import { Box, Button, FormControl, Input, Text, Textarea, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import style from "./Common.module.css";


const Contact = () => {
  const toast = useToast();
  const navigate = useNavigate()
  const [userData,setUserData] = useState({
    name:"",
    phone:"",
    email:"",
    address:"",
    message:""
  });
  const {name,phone,email,address,message} = userData;

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setUserData({...userData,[name]:value})
  };

  const handleSend = (e) =>{
    e.preventDefault();
    toast({
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
      render: () => (
        <Box borderRadius={5} align="center" color="white" p={3} bg="teal">
          We will get back to you
        </Box>
      ),
    });
    // navigate('/')
  }
  return (
    <Box mb="85px">
       <Box mb="55px" className={style.Box1}>
        <Text
          pt="15px"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          color="white"
        >
         Contact Us
        </Text>
      </Box>
      <Box width="40%" margin="auto">
      <FormControl>
        <Input border="1px solid cyan" mb="10px" onChange={handleChange} value={name} name="name" type="text" placeholder='Name' />
        <Input border="1px solid cyan" mb="10px" onChange={handleChange} value={phone} name="phone" type="number" placeholder='Phone Number' />
        <Input border="1px solid cyan" mb="10px" onChange={handleChange} value={email} name="email" type="email" placeholder='Email' />
        <Input border="1px solid cyan" mb="10px" onChange={handleChange} value={address} name="address" type="text" placeholder='Address' />
        <Textarea border="1px solid cyan" mb="10px" onChange={handleChange} value={message} name="message" type="text" placeholder='Write Your message'/>
        <Button _hover={{bg:"#F2C119",color:"black"}} display="block" margin="auto" bg="#183661" color="white" onClick={handleSend}>Send</Button>
      </FormControl>
      </Box>
    </Box>
  )
}

export default Contact

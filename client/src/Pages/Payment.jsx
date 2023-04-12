import { Box, Button, FormControl, Image, Input,Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import style from "./Common.module.css";


const Payment = () => {
  const toast = useToast();
  const navigate = useNavigate()
  const [data,setData] = useState({
    name:"",
    mobile:"",
    address:"",
    atmNumber:"",
    expiryDate:"",
    cvv:""
  });
  const {name,mobile,address,atmNumber,expiryDate,cvv} = data;
  const paymentArray = JSON.parse(sessionStorage.getItem("paymentArray"));
  
  const handleChange = (e)=>{
   const {name,value} = e.target;
   setData({...data,[name]:value});
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    toast({
      title: "Payment Successful",
      description: "Order Placed Successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    navigate("/shopping")
  }
  return (
    <Box marginBottom="60px">
    <Box  width="90%" margin="auto" display="flex" justifyContent="space-evenly" gap="85px">
      <Box width="30%" border="1px solid cyan" mb="45px" mt="45px" className={style.singleProduct}>
        {paymentArray?.map((el)=>
        <Box key={el.id} >
          <Text mt="30px" mb="70px" textAlign="center" fontWeight="bold">{"Total Amount: "+"Rs "+(el.price*el.qty)}</Text>
          <Image margin="auto" width="100px" height="100px" src={el.imageURL}/>
          <Text mt="7px" mb="7px" textAlign="center" fontWeight="bold">{"Name:  "+el.name}</Text>
          <Text mb="7px" textAlign="center" fontWeight="bold">{"Type:  "+el.type}</Text>
          <Text mb="7px" textAlign="center" fontWeight="bold">{"Color:  "+el.color}</Text>
          <Text mb="7px" textAlign="center" fontWeight="bold">{"Items:  "+el.qty}</Text>
          <Text mb="7px" textAlign="center" fontWeight="bold">{"Price:  "+"Rs "+el.price}</Text>
          
        </Box>
        )}
      </Box>
      <Box className={style.form}>
        <FormControl>
        <Input bg="white" mb="15px" value={name} name="name" type="text" onChange={handleChange} placeholder="Card holder name" />
        <Input bg="white" mb="15px" value={mobile} name="mobile" type="number" onChange={handleChange} placeholder="Mobile" />
        <Input bg="white" mb="15px" value={address} name="address" type="text" onChange={handleChange} placeholder="Full Address" />
        <Input bg="white" mb="15px" value={atmNumber} name="atmNumber" type="number" onChange={handleChange} placeholder="Card Number" />
        <Input bg="white" mb="15px" value={expiryDate} name="expiryDate" type="date" onChange={handleChange} placeholder="Card Expiry Date" />
        <Input bg="white" mb="15px" value={cvv} name="cvv" type="number" onChange={handleChange} placeholder="Your CVV" />
        <Button display="block" margin="auto" bg="blue" color="white" _hover={{bg:"green"}} onClick={handleSubmit}>Make Payment</Button>
        </FormControl>
      </Box>
    </Box>
    </Box>
  )
}

export default Payment

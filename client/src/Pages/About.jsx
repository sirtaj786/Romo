import { Box, Button, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import style from "./Common.module.css";
import tShirt from "../images/tisat4.png";
import tShirt1 from "../images/tisat3.png";


const About = () => {
  return (
    <Box mb="95px">
       <Box mb="65px" className={style.Box1}>
        <Text
          pt="15px"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          color="white"
        >
         About
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between" width="90%" margin="auto">
       <Box width="30%">
        <Text mb="20px" fontWeight="bold">Read Here</Text>
        <Text mb="20px" fontWeight="medium">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</Text>
       <Button bg="#183661" color="white" _hover={{bg:"#F2C119",color:"black"}}>Read More</Button>
       </Box>
       <Box >
        <Image mr="160px" src={tShirt}/>
        <Image src={tShirt1}/>
       </Box>
      </Box>
    </Box>
  )
}

export default About

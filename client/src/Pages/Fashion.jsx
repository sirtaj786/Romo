import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import style from "./Common.module.css";
import fashion from "../images/fashion.jpg";

const Fashion = () => {
  return (
    <Box mb="45px">
       <Box mb="55px" className={style.Box1}>
        <Text
          pt="15px"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          color="white"
        >
         Fashion
        </Text>
      </Box>
      <Box width="100%">
          <Image src={fashion} />
        </Box>
    </Box>
  )
}

export default Fashion

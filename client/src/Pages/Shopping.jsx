import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from "./Common.module.css"
const Shopping = () => {
  return (
    <Box  className={style.shopping} ><Link to="/products"><Text color="teal" fontWeight="bold" textAlign="center">Continue Shopping</Text></Link></Box>
  )
}

export default Shopping
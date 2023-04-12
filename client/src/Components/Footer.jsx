import { Box, Text } from "@chakra-ui/react";
import React from "react";
import style from "./Navbar.module.css";
const Footer = () => {
  return (
    <Box>
      <Box className={style.Footer}>
        <Box className={style.footer}>
          <Box>
            <Text mb="20px" mt="50px" fontWeight="bold" color="white">
              INFORMATION
            </Text>
            <Text color="white">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable
            </Text>
          </Box>
          <Box>
            <Text mb="20px" mt="50px" fontWeight="bold" color="white">
              MY ACCOUNT
            </Text>
            <Text color="white">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable
            </Text>
          </Box>
          <Box>
            <Text mb="20px" mt="50px" fontWeight="bold" color="white">
              ABOUT
            </Text>
            <Text color="white">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable
            </Text>
          </Box>
          <Box>
            <Text mb="20px" mt="50px" fontWeight="bold" color="white">
              CONTACTS
            </Text>
            <Text color="white">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable
            </Text>
          </Box>
        </Box>
      </Box>
      <Text nb="10px" mt="10px" textAlign="center">
        © 2019 All Rights Reserved. Design by Free Html Templates
      </Text>
    </Box>
  );
};

export default Footer;

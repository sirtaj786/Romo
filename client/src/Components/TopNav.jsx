import { Box, Select, Text } from "@chakra-ui/react";
import React from "react";
import style from "./Navbar.module.css";
import { PhoneIcon } from "@chakra-ui/icons";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

const TopNav = () => {
  return (
    <Box  position="fixed" top={0} bgColor="white" zIndex={4}  className={style.topNav}>
      <Box className={style.topnav}>
        <Box  gap="10px" display="flex">
          <PhoneIcon marginTop="4px" />
          <Text >Call us: 0126 - 922 - 0162</Text>
        </Box>
        <Box margin="auto" display="flex" gap="15px">
          <a href="" target="_blank" rel="noopener noreferrer">
            <BsFacebook fontSize="25px" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <ImLinkedin fontSize="25px" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <AiFillTwitterCircle fontSize="27px" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <BsInstagram fontSize="25px" />
          </a>
        </Box>
        <Box display="flex" gap="10px">
          <Select height="30px" width="40%">
            <option>English</option>
            <option>Falkla</option>
            <option>Germa</option>
            <option>Neverl</option>
          </Select>
          <Text>Open hour: 8.00 - 18.00</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TopNav;

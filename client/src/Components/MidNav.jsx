import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import style from "./Navbar.module.css";
import { MdEmail } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import appLogo from "../images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { CartContext } from "../ContextAPI/CartContext";

const MidNav = () => {
  const email = useSelector((store) => store.auth.email);
  const { cart_state } = useContext(CartContext);
  const count = cart_state.cart_data.length;
  
  return (
    <Box marginBottom="390px" marginTop="50px" position="fixed" top={0} bgColor="white" zIndex={4}  className={style.midNav}>
      <Box className={style.midnav}>
        <Box display="flex" alignItems="center" paddingTop="15px" gap="10px">
          <MdEmail />
          {email ? <Text>{email}</Text> : <Text>demo@gmail.com</Text>}
        </Box>
        <Box margin="auto" paddingTop="15px">
          <Image src={appLogo} />
        </Box>
        <Link to="/cart">
          {" "}
          <Box
            display="flex"
            alignItems="center"
            paddingTop="20px"
            gap="0px"
            justifyContent="end"
          >
            <GiShoppingBag fontSize="30px" />
            <Text mr="5px">{count}</Text>
            <Box mt="5px">
              <Button
                height="30px"
                bg="#183661"
                color="white"
                _hover={{ bg: "#F2C119" }}
              >
                Order Now
              </Button>
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};

export default MidNav;

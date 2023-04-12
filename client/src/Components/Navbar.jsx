import {
  Avatar,
  Box,

  Input,

  Menu,
  MenuButton,
  MenuItem,
  MenuList,


  Text,


  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAPI } from "../Redux/Auth/userActions";
import style from "./Navbar.module.css";
import profile from "../images/profile.png";
import SearchBar from "./Searchbar";

const Navbar = () => {
  const token = useSelector((store) => store.auth.accessToken);
  const email = useSelector((store) => store.auth.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // -------------------------------------------------------Search/Filter part--------------------------------------------------------
  
  return (
    <Box position="sticky" top={0} zIndex={4} marginTop="130px"  className={style.Navbar}>
      <Box  className={style.navbar}>
        <Box className={style.buttons}>
          <Link to="/">
            <Text className={style.home}>Home</Text>
          </Link>
          <Link to="/about">
            <Text className={style.home}>About</Text>
          </Link>
          <Link to="/products">
            <Text className={style.home}>Products</Text>
          </Link>
          <Link to="/fashion">
            <Text className={style.home}>Fashion</Text>
          </Link>
          <Link to="/news">
            <Text className={style.home}>News</Text>
          </Link>
          <Link to="/contact">
            <Text className={style.home}>Contact us</Text>
          </Link>
        </Box>

        <Box>
         <SearchBar/>
        </Box>

        <Box>
          {token ? (
            <Menu bg="black">
              <MenuButton>
                <WrapItem>
                  <Avatar
                    borderRadius="30px"
                    width="40px"
                    height="40px"
                    src={profile}
                    pb="5px"
                    mt="-1"
                    mr="17px"
                  />{" "}
                </WrapItem>
              </MenuButton>

              <MenuList bg="black" minW="0" w={"auto"}>
                <MenuItem>
                  {token ? (
                    <Text color="black">Welcome</Text>
                  ) : (
                    <Text color="black">Welcome</Text>
                  )}
                </MenuItem>

                <MenuItem align="center">
                  <Text color="black">{email}</Text>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    dispatch(logoutAPI());
                    navigate("/signin");
                  }}
                >
                  <Text color="black">Sign Out</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Menu>
              <MenuButton>
                <WrapItem>
                  <Avatar
                    borderRadius="30px"
                    width="40px"
                    height="40px"
                    src={profile}
                    pb="5px"
                    mt="-1"
                    mr="17px"
                  />{" "}
                </WrapItem>
              </MenuButton>

              <MenuList bg="black" minW="0" w={"auto"}>
                <MenuItem onClick={() => navigate("/signup")}>
                  <Text color="black">Sign Up</Text>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/signin");
                  }}
                >
                  <Text color="black">Sign in</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

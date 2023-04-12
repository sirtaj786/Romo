import { Box, Button, Image, Text, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import style from "./Common.module.css";
import { CartContext } from "../ContextAPI/CartContext";
import { addToCart } from "../Redux/CartProducts/cartActions";
import { ProductContext } from "../ContextAPI/ProductContext";
import { getData } from "../Redux/Products/ProductActions";

const Products = () => {
  const toast = useToast();
  const { state, dispatch } = useContext(ProductContext);

  const { cart_state, cart_dispatch } = useContext(CartContext);

  const handleCart = (props) => {
    const findProduct = cart_state?.cart_data?.find((el) => {
      return el.id == props.id;
    });
    if (findProduct !== undefined) {
      toast({
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
        render: () => (
          <Box borderRadius={5} align="center" color="white" p={3} bg="red.500">
            Product already added to Cart
          </Box>
        ),
      });
    } else {
      props = { ...props, qty: 1 };
      addToCart(cart_dispatch, props);
      toast({
        title: "Product Added",
        description: "Product Added to Cart",
        status: "success",
        duration: 1000,
        isClosable: true,
        position: "top",
      });
    }
  };

  useEffect(() => {
    getData(dispatch);
  }, [dispatch, cart_dispatch]);

  

  return (
    <Box>
      <Box className={style.Box1}>
        <Text
          pt="15px"
          fontSize="4xl"
          fontWeight="bold"
          textAlign="center"
          color="white"
        >
          Featured Products
        </Text>
      </Box>

      <Box className={style.card2}>
        <Box className={style.box1}>
          <Box mb="50px" className={style.productCard}>
            {(state.filterData.length==0?(state.data):(state.filterData)).map((el) => (
              <Box className={style.singleProduct} key={el.id}>
                <Image
                  width="80%"
                  margin="auto"
                  height="250px"
                  src={el.imageURL}
                />
                <Text mb="5px" textAlign="center" fontWeight="black">
                  {el.name}
                </Text>
                <Text mb="10px" textAlign="center">
                  {"Rs " + el.price}
                </Text>
                <Box mb="20px" mt="20px">
                  <Button
                    height="30px"
                    _hover={{ bg: "#F2C119", color: "black" }}
                    display="block"
                    margin="auto"
                    bg="#183661"
                    color="white"
                    onClick={() => handleCart(el)}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
          <Box mt="80px" marginBottom="50px">
            <Button
              _hover={{ bg: "#F2C119", color: "black" }}
              display="block"
              margin="auto"
              bg="#183661"
              color="white"
            >
              SEE MORE
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;

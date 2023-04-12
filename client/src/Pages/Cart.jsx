import React, { useContext } from "react";
import style from "./Common.module.css";
import { RemoveItem, UpdateQuantity } from "../Redux/CartProducts/cartActions";
import { CartContext } from "../ContextAPI/CartContext";
import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart_state, cart_dispatch } = useContext(CartContext);

  const TotalPrice = cart_state?.cart_data.reduce((acc, el) => {
    return acc + el.qty * el.price;
  }, 0);

  const handleCount = (value, id) => {
    const UpdateQty = cart_state?.cart_data?.map((el) => {
      if (el.id == id) {
        return { ...el, qty: el.qty + value };
      } else {
        return el;
      }
    });
    UpdateQuantity(cart_dispatch, UpdateQty);
  };

  const handleDelete = (id) => {
    cart_state?.cart_data.splice(id, 1);
    RemoveItem(cart_dispatch, cart_state?.cart_data);
  };

  const paymentArray = [];
  const handleBuy = (el,id)=>{
    paymentArray.push(el);
    sessionStorage.setItem("paymentArray",JSON.stringify(paymentArray));
    cart_state?.cart_data.splice(id, 1);
    RemoveItem(cart_dispatch, cart_state?.cart_data);
  }

  return (
    <Box  mb="180px">
      <Text textAlign="center" mt="20px" mb="20px" ml="30px">
        Shopping Cart
      </Text>
      <Box>
        <Text fontWeight="bold" mb="30px" mt="20px" textAlign="center">
          Total Amount : Rs {TotalPrice}
        </Text>
      </Box>
      <Box className={style.Container}>
        {cart_state?.cart_data?.map((el, i) => (
          <Box className={style.Card} key={el.id}>
            <Box>
              <Image w="60px" h="40px" src={el.imageURL} />
            </Box>
            <Box>
              <Text fontWeight="bold">{el.name}</Text>
              <Text fontWeight="bold">{"Rs " + el.price * el.qty}</Text>
            </Box>
            <HStack mt="-40px">
              <Text fontWeight="bold">Qty</Text>
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "30px",
                  height: "30px",
                  borderRadius: "5px",
                }}
                disabled={el.qty == el.quantity}
                onClick={() => handleCount(1, el.id)}
              >
                +
              </button>
              <span>{el.qty}</span>
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "30px",
                  height: "30px",
                  borderRadius: "5px",
                }}
                disabled={el.qty == 1}
                onClick={() => handleCount(-1, el.id)}
              >
                -
              </button>
            </HStack>
            <Box>
              <Link to="/payment">
                {" "}
                <Button
                  bg="blue"
                  color="white"
                  _hover={{ bg: "green" }}
                  onClick={() => handleBuy(el,el._id)}
                >
                  Buy Now
                </Button>
              </Link>
            </Box>
            <Box>
              <Button
                bg="brown"
                color="white"
                _hover={{ bg: "red" }}
                onClick={() => handleDelete(el._id)}
              >
                Delete
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Cart;

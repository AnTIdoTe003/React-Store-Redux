import { Box, Button, Container, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "../store/slices/cartSlice";

const Cart = () => {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <Box w={"full"}>
      <Container w={"full"} maxW={"1440px"} margin={"0 auto"}>
        <Box w={"full"} display={"flex"} gap={"1rem"}>
          {/* Cart Items */}
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"70%"}
            bg={"gray.200"}
            borderRadius={"6px"}
          >
            <Box>
              <Text fontSize={"2xl"} fontWeight={"500"}>
                Your cart Items
              </Text>
            </Box>
            <Box>
              {cartData.items.map((ele) => {
                return (
                  <HStack justifyContent={'space-around'}>
                    <Box>
                      <Text>{ele.title}</Text>
                    </Box>
                    <Box>
                      <Button
                        onClick={() => dispatch(removeItemFromCart(ele.id))}
                      >
                        Remove
                      </Button>
                    </Box>
                  </HStack>
                );
              })}
            </Box>
          </Box>
          {/* Order Value */}
          <Box
            w={"30%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            bg={"gray.200"}
            borderRadius={"6px"}
          >
            <Box>
              <Text fontSize={"2xl"} fontWeight={"500"}>
                Your order Value
              </Text>
            </Box>
            <Box>
              <Text>Rs {cartData.totalPrice}</Text>
            </Box>
            <Box>
              <Button>Confrim Order</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Cart;

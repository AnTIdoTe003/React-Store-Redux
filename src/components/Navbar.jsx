import { Box, Button, Container, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const cartData = useSelector((state)=>state.cart.items)
  return (
    <Box w={"full"} bg={"gray.200"} h={"100px"}>
      <Container maxW={"1440px"} h={"full"} w={"full"} margin={"0 auto"}>
        <Box
          w={"full"}
          display={"flex"}
          h={"full"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Text>Apna Dukan</Text>
          <Link to={"/cart"}>
            <Button>Cart {cartData.length}</Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;

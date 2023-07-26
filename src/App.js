import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Container,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "./store/slices/cartSlice";
const App = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({
    orderId: "",
    products: [],
  });
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  console.log(cartData);
  return (
    <Box w={"full"}>
      <Container w={"full"} maxW={"1440px"} margin={"0 auto"}>
        <Box
          w={"full"}
          display={"flex"}
          flexWrap={"wrap"}
          gap={"1rem"}
          pt={"2rem"}
        >
          {products.map((ele) => {
            return (
              <Card
                key={ele.id}
                maxW="sm"
                borderRadius={"6px"}
                border={"1px solid #bbb"}
              >
                <CardBody>
                  <Image
                    w={"100px"}
                    height={"100px"}
                    src={ele.image}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{ele.title.substring(0, 15)}</Heading>
                    <Text>{ele.description.substring(0, 10)}</Text>
                    <Text color="blue.600" fontSize="2xl">
                      $ {ele.price}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="solid" colorScheme="blue">
                      Buy now
                    </Button>
                    <Button
                      variant="ghost"
                      colorScheme="blue"
                      onClick={() => {
                        setCartData({
                          ...cartData,
                          orderId: uuidv4(),
                          products: [
                            ...cartData.products,
                            { productId: ele.id, quantity: 1 },
                          ],
                        });
                        dispatch(addItemToCart({id:ele.id, quantity:1, title:ele.title, price:ele.price}))
                      }}
                    >
                      Add to cart
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default App;

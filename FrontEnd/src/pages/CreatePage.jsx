import { Box, Button, Container, Heading, Input, useColorMode, useColorModeValue, VStack } from '@chakra-ui/react';
import React from 'react'


const CreatePage = () => {
const [newProduct, setNewProduct] = React.useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to create a new product
    console.log('New Product Created:', newProduct);
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box w={"full"} bg={useColorModeValue("white","gray.900")} p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={(handleChange)}
            />
            <Input
            placeholder="Product Price"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            />
             <Input
            placeholder="Product Description"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            />
            <Input
            placeholder='Product Image URL'
            name="image"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
            /> 
            <Button colorScheme="blue" onClick={handleSubmit} width="full"> Add Product</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );    
};
export default CreatePage;

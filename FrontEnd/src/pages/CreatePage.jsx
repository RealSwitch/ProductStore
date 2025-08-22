import { Box, Button, Container, Heading, Input, useColorModeValue, useToast, VStack } from '@chakra-ui/react';
import {useState} from 'react'
import {useProductStore} from '../store/product';
// import { createProduct } from '../store/product/useProductStore';
// import useProductStore from '../store/product';
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
      name: '',
      price: '',
      description: '',
      image: ''
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewProduct({ ...newProduct, [name]: value });
    };
    const {createProduct} = useProductStore()
    const toast = useToast()
    const handleSubmit = async () => {
      // e.preventDefault();
      // Logic to create a new product
      const {success,message} = await createProduct(newProduct)
      if (!success){
        toast({
          title:"Error",
          description:message,
          status:"error",
          duration:4500,
          isClosable: true
        })
        
      }else{toast({
          title:"Success",
          description:message,
          status:"success",
          duration:4500,
          isClosable: true
        })
        
      }
      console.log('New Product Created:', newProduct);
      console.log('Succes: ',success);
      console.log('Message: ',message)
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

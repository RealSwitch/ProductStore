import { Container, VStack,Text } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useProductStore from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const {fetchProducts,products} = useProductStore();
  useEffect(() => {
    fetchProducts();
  },[fetchProducts]);
  console.log(products)
  return (
  <Container maxW='coontainer.x1' py={12}>
    <VStack spacing={8}>
            <Text
        fontSize={{base:"22", sm:"28"}}
        fontWeight={'bold'}
        bgGradient={'linear(to-r, #7928CA, #FF0080)'}
        bgClip={'text'}
        textAlign={"center"}
        >
          Products
      </Text>
      
        {products.length === 0 && (   
        <Text fontSize={'x1'} textAlign={"center"} fontWeight={'bold'} color='gray.500'>
          No products found 😞     
          <Link to="/create">
            <Text color={'blue.500'} _hover={{textDecoration:"underline"}}>
              Add Product to the store
            </Text>
          </Link>
        </Text>
          )}
        <SimpleGrid
        columns={{base:1,md:3,lg:5}}
        spacing={8}
        w={"full"}
        >
          {products.map((product)=> (<ProductCard key={product._id} product={product}/>))}
        </SimpleGrid>
        
    </VStack>
  </Container>);
};
export default HomePage;

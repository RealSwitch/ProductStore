import { transform } from "framer-motion";
import { Box,Heading,HStack,IconButton,Image,Text, useColorModeValue, useToast } from "@chakra-ui/react";
import { DeleteIcon ,EditIcon} from "@chakra-ui/icons";
import useProductStore from "../store/product";

// import { Icon} from "@chakra-ui/icons";
const ProductCard = ({product}) => {
    const textColor = useColorModeValue("gray.600","gray.200");
    const bg = useColorModeValue("white","gray.800");
    const {deleteProduct} = useProductStore();
    const toast = useToast();
            // const { isOpen, onOpen, onClose } = useDisclosure()
    // const handleUpdateProduct = async (product_id,updatedProduct) => {
    //     const {success,message} = await updateProduct(product_id,updatedProduct);
    //     console.log('success: ',success);
    //     console.log('message: ',message);
    //     onClose()
    //     if (!success){
    //         toast(
    //             {title:"Error",
    //             description:message,
    //             status:"error",
    //             duration:3000,
    //             isClosable:true,
    //         }
    //         );
    //     }else{
    //         toast(
    //             {title:"Success",
    //             description:message,
    //             status:"success",
    //             duration:3000,
    //             isClosable:true,
    //         }
    //         );
    //     }
    // }
    const handleDeleteProduct = async (product_id) => {
        const {success,message} = await deleteProduct(product_id)
        if (!success){
            toast(
                {title:"Error",
                description:message,
                status:"error",
                duration:3000,
                isClosable:true,
            }
            );
        }else{
            toast(
                {title:"Success",
                description:message,
                status:"success",
                duration:3000,
                isClosable:true,
            }
            );
        }
    }
    return (
        <Box
            shadow='lg'
            rounded='lg'
            overflow='hidden'
            transitio='all 0.3s'
            _hover={{transform:"translateY(-5px)",shadow:"x1"}}
            bg={bg}
            >
                <Image src={product.image} alt={product.name} h={48} w='full' objectFIt='cover' />
                <Box p={4}>
                    <Heading as='h3' size='md' mb={'2'}>
                        {product.name}
                    </Heading>
                    <Text fontWeight='bold' fontSize='x1' color={textColor} mb={4}>${product.price}</Text>
                    <HStack spacing={2}>
                        <IconButton icon={<EditIcon />} colorScheme="blue" />
                        <IconButton icon={<DeleteIcon />} onClick={() => handleDeleteProduct(product._id)} colorScheme="red" />
                        
                    </HStack>
                </Box>
        </Box>
        
    );
}
export default ProductCard;
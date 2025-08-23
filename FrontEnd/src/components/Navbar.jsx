import { Button, Container, Flex, HStack, Text, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return <Container maxW={"1140px"} px={4}>
    <Flex
      h={16} alignItems={"center"} justifyContent={"space-between"}
      flexDir = {{
        base:"column",
        sm:"row "
      }}>
      <Text
        fontSize={{base:"22", sm:"28"}}
        fontWeight={'bold'}
        bgGradient={'linear(to-r, #7928CA, #FF0080)'}
        bgClip={'text'}
        textAlign={"center"}
        >
          <Link to={"/"}>TechXplora</Link>
      </Text>
      <HStack spacing={2} alignItems={"center"} justifyContent={"center"}>
        <Link to={"/create"}>
        <Button>  <PlusSquareIcon fontSize={20}/>
        </Button>
        </Link>
        <Link to={"/products"}>
        <Button>  <PlusSquareIcon fontSize={20}/>
        </Button>
        </Link>
        {/* <Link to={"/cart"}>Cart</Link>
        <Button>  <PlusSquareIcon fontSize={20}/></Button>
        <Link to={"/login"}>Login</Link>
        <Button>  <PlusSquareIcon fontSize={20}/></Button>
        <Link to={"/register"}>Register</Link>      
        <Button>  <PlusSquareIcon fontSize={20}/></Button> */}
        <Button onClick={toggleColorMode}>  {colorMode==="light"?<IoMoon size="20"/>:<LuSun size="20"/>} </Button>
      {/* <Link to={"/about"}>About</Link> */}
      {/* <Link to={"/contact"}>Contact</Link> */}
      {/* <Link to={"/profile"}>Profile</Link> */}
      {/* <Link to={"/settings"}>Settings</Link> */}
      {/* <Link to={"/help"}>Help</Link> */}
      {/* <Link to={"/logout"}>Logout</Link> */}
      {/* <Link to={"/dashboard"}>Dashboard</Link> */}
      {/* <Link to={"/notifications"}>Notifications</Link> */}
      {/* <Link to={"/messages"}>Messages</Link> */}
      {/* <Link to={"/favorites"}>Favorites</Link> */}    

      </HStack>
    </Flex>
  </Container>;
};

export default Navbar

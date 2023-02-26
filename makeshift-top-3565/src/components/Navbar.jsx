import React from "react";
import {
  Box,
  Flex,
  
  Button,
  Input,
  
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {useNavigate} from 'react-router-dom';



export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate=useNavigate();
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "black.500")}
        px={4}
        padding="8px 2px"
        boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px"
        marginBottom="10px"
        position="fixed"
        width="100%"
        top="0px"
       zIndex={2}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          width="70%"
          margin="auto"
          gap="20px"
          
        >
          
          <Image onClick={()=>navigate("/")}
            w="10%"
            cursor="pointer"
            src="https://th.bing.com/th?id=OIP.3p3Hmbuzn-Tr0jONIF3aPAHaD2&w=346&h=180&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          ></Image>
          
          <Input placeholder="Search for Products..." width="60%" />

          <Flex alignItems={"center"} gap="20px" height="80%" >
            <Button
              h="80%"
              display="grid"
              flexDirection="row"
              color="gray.500"
              gap="0px"
            >
              <p style={{fontSize:"12px"}}>Get in 5 Hours</p>
              <p style={{fontSize:"12px"}}>Home: Dwarka Sect...</p>
            </Button>
            <Button onClick={()=>navigate("/login")} color="white" bgColor="black" fontSize="12px">
              Login/ Sign Up
            </Button>
            <Image  onClick={()=>{
              navigate("/checkout");
                          }}  width="10%" src="https://cdn-icons-png.flaticon.com/128/9453/9453946.png"></Image>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

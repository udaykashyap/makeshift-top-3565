import { Box, Button, Heading, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Productcard = ({el}) => {
    console.log(el,"cs")
    
  return (
    <Box>
<Box mt="5%" ml="4%" boxShadow={"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"} >
         <Heading size={"xs"}>
            {el.title}
         </Heading>
         <Image ml="25%" src={el.image}/>
         <Text color={"black"} fontWeight={"bold"} fontFamily={"sans-serif"}>Discount:{el.discount}</Text>
         <Text color={"black"} fontWeight={"bold"} fontFamily={"sans-serif"}>Price:{el.price}</Text>
         <Text color={"black"} fontWeight={"bold"} fontFamily={"sans-serif"}>Brand:{el.brand}</Text>

</Box>
      </Box>
  )
}

export default Productcard
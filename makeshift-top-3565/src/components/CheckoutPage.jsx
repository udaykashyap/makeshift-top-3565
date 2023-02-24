import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const CheckoutPage = () => {
  return (
    <Box width="70%" margin="auto">
      <h1>CheckoutPage</h1>

      {/* update total count of cart here */}
      <Box>
        <h1>Your Basket (0 Items)</h1>
      </Box>
      <br />
      <hr />
      <br />

      <Box>
        <Button fontSize="12px" border="1px solid coral">
          VIEW AVALIABLE PROMOS
        </Button>
      </Box>

      <div>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>ITEM DESCRIPTION</Th>
                <Th>UNIT PRICE</Th>
                <Th>QUANTITY</Th>
                <Th>SUBTOTAL</Th>
                <Th>SAVINGS</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Chini</Td>
                <Td>40</Td>
                <Td>1Kg</Td>
                <Td>40</Td>
                <Td>2</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <hr />
      <Box display="flex" justifyContent="space-between" padding="20px">
        <div>
          {/* Empty backet here */}
          <Button fontSize="12px" border="1px solid green">
            Empty Basket
          </Button>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          {/* Navigate to the homepage */}
          <Button
            fontSize="12px"
            boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"
          >
            Continue Shoping
          </Button>
        </div>
        <Box border="1px solid black" padding="30px" height="300px">
          {/* add total price here 1*/}
          <h4>Subtotal :0</h4>

          <h4>Delivery Charges : Free Delivery</h4>
          <br />
          <hr />
          {/* add total price here 2*/}
          <h2>Total : 0</h2>
          <br />
          <p>* For this order: Accepted food coupon is Rs. 475.00</p>
          <hr />
          <br />
          <Flex justifyContent="end">
            <Button
              backgroundColor="#fbdf7b"
              fontSize="19px"
              _hover={{ backgroundColor: "#f2ca76" }}
            >
              CHECKOUT
            </Button>
          </Flex>
          <br />
          <p>** Actual delivery charges computed at checkout time</p>
        </Box>
      </Box>

      <hr />
      <div>
        <h1>Missed Something?</h1>
        <hr />
      </div>
    </Box>
  );
};

export default CheckoutPage;

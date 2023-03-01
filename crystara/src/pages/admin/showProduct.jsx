import React, { useEffect } from "react";
import Navbar from "./navbar";
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
  Button,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchData} from "@/redux/admin/admin.action";
import axios from "axios";
import Mondal from "./Mondal";
const ShowProduct = () => {
  const product = useSelector((store) => {
    return store.adminReducer.product
  });
  const dispatch = useDispatch();

  const toast = useToast();
  const positions = ["bottom-right"];

  useEffect(() => {
    dispatch(fetchData());
  }, []);



  const handleDelete = (id) => {
    axios
      .delete(`https://charming-bee-pea-coat.cyclic.app/rings/${id}`)
      .then((res) => {
        dispatch(fetchData());
      });
    toast({
      title: "Product Deleted ",
      position: positions,
      isClosable: true,
    });
    // console.log("hello!");
  };

  // console.log( "hello", product);
  return (
    <>
      <Navbar />
      <Heading textAlign={"center"} p={5} color="#5d1059">
        List Of Products
      </Heading>
      <TableContainer p={2} fontSize={{base:"12",md:"sm",xl:"md"}} >
        <Table variant="striped" colorScheme="purple">
          <TableCaption>LIST OF PRODUCT</TableCaption>
          <Thead>
            <Tr >
              <Th fontSize={{base:"12",xl:"md"}}>TITLE</Th>
              <Th fontSize={{base:"12",xl:"md"}}>MATERIAL</Th>
              <Th fontSize={{base:"12",xl:"md"}}>PRICE</Th>
              <Th fontSize={{base:"12",xl:"md"}}>EDIT</Th>
              <Th fontSize={{base:"12",xl:"md"}}>DELETE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              product.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>{item.name}</Td>
                    <Td>{item.material}</Td>
                    <Td>{item.currentPrice}</Td>
                    <Td>
                      <Mondal/>
                    </Td>
                    <Td>
                      {" "}
                      <Button fontSize={{base:'10' , md:'sm'}} onClick={() => handleDelete(item.id)}>DELETE</Button>{" "}
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ShowProduct;

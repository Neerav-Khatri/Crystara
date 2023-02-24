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
    dispatch(deleteProduct(id));
    toast({
      title: "Product Deleted ",
      position: positions,
      isClosable: true,
    });
    console.log("hello!");
  };

  // console.log( "hello", product);
  return (
    <>
      <Navbar />
      <Heading textAlign={"center"} p={5} color="#5d1059">
        List Of Products
      </Heading>
      <TableContainer p={8}>
        <Table variant="striped" colorScheme="purple">
          <TableCaption>LIST OF PRODUCT</TableCaption>
          <Thead>
            <Tr>
              <Th>TITLE</Th>
              <Th>MATERIAL</Th>
              <Th>PRICE</Th>
              <Th>EDIT</Th>
              <Th>DELETE</Th>
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
                      <Button>EDIT</Button>{" "}
                    </Td>
                    <Td>
                      {" "}
                      <Button onClick={() => handleDelete(item.id)}>DELETE</Button>{" "}
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

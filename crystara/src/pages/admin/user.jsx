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
import { deleteUser, fetchUser } from "@/redux/admin/admin.action";
const User = () => {
  const user = useSelector((store) => {
    return store.adminReducer.user;
  });

  const dispatch = useDispatch();

  const toast = useToast();
  const positions = ["bottom-right"];

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://charming-bee-pea-coat.cyclic.app/user/${id}`)
      .then((res) => {
        dispatch(fetchUser());
      });
    toast({
      title: "User Deleted ",
      position: positions,
      isClosable: true,
    });
    // console.log("hello!");
  };
  // console.log("hello", user);
  return (
    <>
      <Navbar />
      <Heading textAlign={"center"} p={5} color=" #5d1059 ">
        List Of Users
      </Heading>
      <TableContainer p={2} fontSize={{base:"12",md:"sm",xl:"md"}}>
        <Table variant="striped" colorScheme="purple">
          <TableCaption>LIST OF USERS</TableCaption>
          <Thead >
            <Tr fontSize={{base:"12",md:"sm",xl:"md"}}>
              <Th >NAME</Th>
              <Th>EMAIL</Th>
              <Th>PASSWORD</Th>
              <Th>DELETE</Th>
            </Tr>
          </Thead>
          <Tbody>
            {user.map((item) => {
              return (
                <Tr key={item.id}>
                  <Td>{item.first_name}</Td>
                  <Td>{item.email}</Td>
                  <Td>{item.password}</Td>
                  <Td>
                    {" "}
                    <Button fontSize={{base:'10' , md:'sm'}} onClick={() => handleDelete(item.id)}>
                      DELETE
                    </Button>{" "}
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

export default User;

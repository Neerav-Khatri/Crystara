import React from 'react'
import Navbar from './navbar'
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
  } from '@chakra-ui/react'
const ShowProduct = () => {
  return (
    <>
    <Navbar />
    <Heading textAlign={"center"} p={5} color="cyan.800">List Of Products</Heading>
    <TableContainer p={8} >
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>LIST OF PRODUCT</TableCaption>
    <Thead>
      <Tr>
        <Th>TITLE</Th>
        <Th>MATERIAL</Th>
        <Th>TYPES</Th>
        <Th>EDIT</Th>
        <Th>DELETE</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td>25.4</Td>
        <Td><Button>EDIT</Button> </Td>
        <Td> <Button>DELETE</Button> </Td>
        
        
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td>30.48</Td>
        <Td><Button>EDIT</Button> </Td>
        <Td> <Button>DELETE</Button> </Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td>0.91444</Td>
        <Td><Button>EDIT</Button> </Td>
        <Td> <Button>DELETE</Button> </Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th>multiply by</Th>
        <Td><Button>EDIT</Button> </Td>
        <Td> <Button>DELETE</Button> </Td>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </>
  )
}

export default ShowProduct

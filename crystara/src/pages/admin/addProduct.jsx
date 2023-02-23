import React from "react";
import Navbar from "./navbar";
import { Button, Heading, Input, Select, Stack } from "@chakra-ui/react";
const AddProduct = () => {
  return (
    <>
      <Navbar />

      {/* HEADING OF FORM  */}

      <Heading textAlign={"center"} p={5} color="cyan.800">
        Add Product
      </Heading>

      {/* INPUT FIELD  */}

      <Stack spacing={3} p={8} border="1px solid cyan" m={5}>
        <Input placeholder="Image 1" size="md" />
        <Input placeholder="Image 2" size="md" />
        <Input placeholder="Tag" size="md" />
        <Input placeholder="Current Price " size="md" />
        <Input placeholder="Original Price" size="md" />
        <Input placeholder="Name" size="md" />

        {/* SELECT OPTION METRIAL  */}

        <Select placeholder="Meterial" border="1px solid cyan">
          <option value="diamond"> Diamond</option>
          <option value="solitaire">Solitaire</option>
          <option value="gold">Gold</option>
          <option value="gemStone">Gem Stone</option>
          <option value="pearl">Pearl</option>
        </Select>

        {/* SELECT OPTION TYPES  */}

        <Select placeholder="Type" border="1px solid cyan">
          <option value="rings"> Rings</option>
          <option value="earRing">Earring</option>
          <option value="bracelet">Bracelet</option>
          <option value="newArrival">New Arrival</option>
        </Select>

        {/* BUTTON FOR POST REQUEST  */}

        <Stack direction="row" spacing={5} align="center" pt={5}>
          <Button colorScheme="teal" variant="solid">
            Rings
          </Button>
          <Button colorScheme="teal" variant="solid">
            Ear-ring
          </Button>
          <Button colorScheme="teal" variant="solid">
            Bracelet
          </Button>
          <Button colorScheme="teal" variant="solid">
            New Arrival
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default AddProduct;

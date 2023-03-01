import React, { useState } from "react";
import Navbar from "./navbar";
import { Button, FormControl, Heading, Input, Select, Stack, useToast } from "@chakra-ui/react";
const initial = {
  src1: "",
  src2: "",
  currentPrice: 0,
  originalPrice: 0,
  tag: "",
  meterial: "",
  name: "",
  type: "",
};
const AddProduct = () => {
  const [formData, setFormData] = useState(initial);
  const toast = useToast()
  const positions = [
    'bottom-right',
  ]

  // ADD RINGS  

  const handleRings = (e) => {
    e.preventDefault()
    fetch(`https://charming-bee-pea-coat.cyclic.app/rings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setFormData(initial);
        toast({
          title: `Product Added Successfully`,
          position: positions,
          isClosable: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

// ADD EAR RINGS 


  const handleEarrings = (e) => {
    e.preventDefault()
    fetch(`https://charming-bee-pea-coat.cyclic.app/earrings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setFormData(initial);
        toast({
          title: `Product Added Successfully`,
          position: positions,
          isClosable: true,
        })

      })
      .catch((e) => {
        console.log(e);
      });
  };

  // ADD BRACCELET 


  const handleBracelet = (e) => {
    e.preventDefault()
    fetch(`https://charming-bee-pea-coat.cyclic.app/bracelets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setFormData(initial);
        toast({
          title: `Product Added Successfully`,
          position: positions,
          isClosable: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

// ADD NEW ARRIVEL  

  const handleArrivel = (e) => {
    e.preventDefault()
    fetch(`https://charming-bee-pea-coat.cyclic.app/arrival`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setFormData(initial);
        toast({
          title: `Product Added Successfully`,
          position: positions,
          isClosable: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // console.log("helloo", formData)

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Navbar />

      {/* HEADING OF FORM  */}

      <Heading textAlign={"center"} p={5} color="#5d1059">
        Add Product
      </Heading>

      {/* INPUT FIELD  */}
      <FormControl>
        <Stack spacing={3} p={8} border="1px solid purple" m={5}>
          <Input
            placeholder="Image 1"
            size="md"
            name="src1"
            onChange={handleChange}
          />
          <Input
            placeholder="Image 2"
            size="md"
            name="src2"
            onChange={handleChange}
          />
          <Input placeholder="Tag" size="md" name="tag" onChange={handleChange} />
          <Input
            type='number'
            placeholder="Current Price "
            size="md"
            name="currentPrice"
            onChange={handleChange}
          />
          <Input
            type="number"
            placeholder="Original Price"
            size="md"
            name="originalPrice"
            onChange={handleChange}
          />
          <Input
            placeholder="Name"
            size="md"
            name="name"
            onChange={handleChange}
          />

          {/* SELECT OPTION METRIAL  */}

          <Select
            placeholder="Material"
            border="1px solid purple"
            name="material"
            onChange={handleChange}
          >
            <option value="diamond"> Diamond</option>
            <option value="solitaire">Solitaire</option>
            <option value="gold">Gold</option>
            <option value="gemStone">Gem Stone</option>
            <option value="pearl">Pearl</option>
          </Select>

          {/* SELECT OPTION TYPES  */}

          <Select
            placeholder="Type"
            border="1px solid purple"
            name="type"
            onChange={handleChange}
          >
            <option value="rings"> Rings</option>
            <option value="earRing">Earring</option>
            <option value="bracelet">Bracelet</option>
            <option value="newArrival">New Arrival</option>
          </Select>

          {/* BUTTON FOR POST REQUEST  */}

          <Stack direction="row" spacing={5} align="center" pt={5}  >
            <Button colorScheme="purple" fontSize={{base:'12' , md:'xl'}} variant="outline" onClick={handleRings}>
              Rings
            </Button>
            <Button colorScheme="purple" fontSize={{base:'12' , md:'xl'}} variant="outline" onClick={handleEarrings}>
              Ear-ring
            </Button>
            <Button colorScheme="purple" fontSize={{base:'12' , md:'xl'}} variant="outline" onClick={handleBracelet}>
              Bracelet
            </Button>
            <Button colorScheme="purple" fontSize={{base:'12' , md:'xl'}} variant="outline" onClick={handleArrivel}>
              New Arrival
            </Button>
          </Stack>
        </Stack>
      </FormControl>
    </>
  );
};

export default AddProduct;

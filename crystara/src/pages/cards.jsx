import ShowOtp from "@/components/ShowOtp";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  Spacer,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Form } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiArrowLeft } from "react-icons/hi";


const CardsForPay = () => {

  // const [number, setNumber] = useState(false);
  // const [date, setDate] = useState(false);
  // const [cvv, setCvv] = useState(false);
  // const [name, setName] = useState(false);

  const [number, setNumber] = useState("");  // Store actual value
const [date, setDate] = useState("");      // Store actual value
const [cvv, setCvv] = useState("");        // Store actual value
const [name, setName] = useState(""); 

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    // if (number == false || date == false || cvv == false || name == false) {
    //   alert("Enter all details");
    // } else {
    //   setLoading(!loading);
    //   setShow(!show);
    // }
    if (!number || !date || !cvv || !name) {
      alert("Enter all details");
    } else {
      setLoading(true);
      setShow(true);
    }
  };

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  // const enteringNumber = (e) => {
  //   e.target.value = e.target.value.replace(/[^0-9]/g, '');
  //   if (e.target.value.length > 12) {
  //     e.target.value = e.target.value.slice(0, 12);
  //   }
  //   console.log(e.target.value);
  //   if (e.target.value == "124512451245") {
  //     setNumber(!number);
  //   }
  // };
  // const enteringDate = (e) => {

  //   let value = e.target.value;

  //   // Only numbers and slash allowed
  //   value = value.replace(/[^\d/]/g, "");

  //   // Automatically add slash after 2 digits
  //   if (value.length === 2 && !value.includes("/")) {
  //     value = value + "/";
  //   }

  //   // Max length = 5 (MM/YY)
  //   if (value.length <= 5) {
  //     setDate(!date);
  //   }
  
  // };
  // const enteringCVV = (e) => {
    
  //   e.target.value = e.target.value.replace(/[^0-9]/g, '');
  //   if (e.target.value.length > 3) {
  //     e.target.value = e.target.value.slice(0, 3);
  //   }

  //   if (e.target.value == "321") {
  //     setCvv(!cvv);
  //   }
  // };
  // const enteringName = (e) => {
  //   e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
  //   if (e.target.value == "Mustaq") {
  //     setName(!name);
  //   }
  // };

  const enteringNumber = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '');  // Remove non-numeric characters
    if (value.length > 12) {
      value = value.slice(0, 12);  // Limit to 12 digits
    }
    setNumber(value);  // Store actual card number instead of just toggling boolean
  };

  const enteringDate = (e) => {
    let value = e.target.value.replace(/[^\d/]/g, "");  // Remove anything other than digits and slashes

    if (value.length === 2 && !value.includes("/")) {
      value = value + "/";  // Auto-insert slash after 2 digits
    }
    if (value.length <= 5) {
      setDate(value);  // Store expiry date instead of just toggling boolean
    }
  };

  const enteringCVV = (e) => {
    let value = e.target.value.replace(/[^0-9]/g, '');  // Remove non-numeric characters
    if (value.length > 3) {
      value = value.slice(0, 3);  // Limit to 3 digits
    }
    setCvv(value);  // Store actual CVV number instead of just toggling boolean
  };

  const enteringName = (e) => {
    let value = e.target.value.replace(/[^a-zA-Z\s]/g, '');  // Remove anything that's not a letter or space
    setName(value);  // Store name value instead of just toggling boolean
  };


  if (loading)
    return (
      <>
        <Flex
          bgColor={"gray.200"}
          height="50rem"
          align="center"
          justifyContent={"center"}
       
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="black"
            size="xl"
          />
        </Flex>
      </>
    );

  return (
    <Box bgColor={"gray.100"}  border='1px'  >
    
      {!show && (
        <Center
          w={{base:'99%',sm:'99%',md:'70%',lg:"50%"}}
          margin="auto"
          // marginTop={"1rem"}
          color="black"
          //border={"1px solid #f5f5f5"}
          bgColor="white"
          paddingTop={"1rem"}
          paddingBottom={"5rem"}
       
        >
          <Flex  >

            <Box p="0.2rem" w='45%' >
              <Flex align={"center"} justifyContent="space-between" >
                <Link href={"/paymentoptions"}>
                  <Flex gap={2}>
                    <HiArrowLeft cursor={"pointer"} size={30} />
                    <p style={{ fontWeight: "bold" }}>Back</p>
                  </Flex>
                </Link>
                <Box border={"1px solid #f5f5f5"}   >
                  <Stack padding={3}>
                    <Image
                      src={
                        "https://web-assets.payu.in/web/images/assets/logo/631035cddb8f2"
                      }
                      alt="payment-optipn-logo"
                      height={50}
                      width={50}
                    />
                  </Stack>
                </Box>
              </Flex>
              <br />
              {/* <h1 style={{fontWeight:"bolder", fontSize:""}}>Choose a payment Option</h1> */}
              <Text fontSize={"xl"} fontWeight="bold" >
                Choose a payment option
              </Text>
              <br />
              <Flex align={"center"} justifyContent="space-between" >
                <p>payable now</p>
                <p
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  ₹19884
                </p>
              </Flex>
              <br />
              <h6>Transaction id: FSHJAH6S3</h6>
            </Box>





            
            <Spacer />

            
            <Box p="0.2rem" w='52%'>
              <h1 style={{ color: "#c5a899" }}>CREDIT CARD</h1>
              <Box
                marginTop={"1rem"}
                border={"5px solid purple"}
                borderBottom="none"
                borderTop={"none"}
                borderRight="none"
                gap={"4rem"}
              >
                <Flex
                  // minH={"100vh"}
                  //   background={"Background"}

                  align={"center"}
                  justify={"center"}
                  bg={useColorModeValue("gray.50", "gray.800")}
                
                >
                  <Stack
                    spacing={8}
                    mx={"auto"}
                    marginTop="1rem"
                    maxW={"sm"}
                    px={6}
                  >
                    <Box
                      rounded={"lg"}
                      bg={useColorModeValue("#fafafa", "gray.700")}
                      //   boxShadow={"lg"}

                      p={8}
                    >
                      <Stack spacing={4}>
                        <FormControl isRequired>
                          <FormLabel fontWeight={"light"}>
                            Card Number
                          </FormLabel>
                          <Input
                            onChange={enteringNumber}
                            backgroundColor={"Background"}
                            type="number"
                          />
                        </FormControl>
                        
                          <Box>
                            <FormControl id="firstName" isRequired>
                              <FormLabel fontWeight={"light"}>
                                Expiry Date
                              </FormLabel>
                              <Input
                                onChange={enteringDate}
                                backgroundColor={"Background"}
                                type="text"
                                   placeholder="MM/YY"
                              />
                            </FormControl>
                          </Box>
                          <Box>
                            <FormControl id="lastName" isRequired>
                              <FormLabel fontWeight={"light"}>CVV</FormLabel>
                              <Input
                                onChange={enteringCVV}
                              
                                backgroundColor={"Background"}
                                type="number"
                              />
                            </FormControl>
                          </Box>
                        

                        <FormControl id="password" isRequired>
                          <FormLabel fontWeight={"light"}>
                            Name on Card
                          </FormLabel>
                          <InputGroup>
                            <Input
                              onChange={enteringName}
                              backgroundColor={"Background"}
                              type="text"
                            />
                          </InputGroup>
                        </FormControl>
                        
                          <Stack
                         
                            align={"start"}
                            justify={"space-between"}
                            fontWeight="light"
                        
                          >
                            <Checkbox>
                              Secure option for faster checkouts
                            </Checkbox>
                            {/* <Link color={"blue.400"}>Forgot password?</Link> */}
                          </Stack>
                          <Button
                            type="submit"
                            mt={4}
                            onClick={handleClick}
                            loadingText="Processing"
                            size="lg"
                            bg={"blue.400"}
                            color={"white"}
                            _hover={"none"}
                            // disabled={number==false || data==false || cvv==false || name==false}
                          >
                            PROCEED
                          </Button>
                       
                      </Stack>
                    </Box>
                  </Stack>
                </Flex>


              </Box>
            </Box>


          </Flex>
        </Center>
      )}

      {show && <ShowOtp />}
    </Box>
  );
};

const paymentOptions = [
  {
    logo: "https://api.payu.in/public/assets/images/card-icon.svg",
    name: "Credit Card",
    desc: "Pay using any credit card",
    id: 1,
  },
  {
    logo: "https://api.payu.in/public/assets/images/upi-icon.svg",
    name: "UPI",
    desc: "Pay with any UPI app like Phonepay, Paytm,Google Pay and more",
    id: 2,
  },
  {
    logo: "https://api.payu.in/public/assets/images/gpay.svg",
    name: "Google Pay",
    desc: "Pay using any credit card",
    id: 3,
  },
  {
    logo: "https://api.payu.in/public/assets/images/upi-logos/upi2/WhatsApp.svg",
    name: "WhatsApp",
    desc: "Pay using any credit card",
    id: 4,
  },
];
export default CardsForPay;

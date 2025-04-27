import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Input,
  Heading,
  Divider,

} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import NavSearch from "./Navsearch";
import Image from "next/image";
import { IoIosHeart, IoIosPerson, IoIosPin } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { useEffect, useState } from "react";
import { BsBag, BsFillHandbagFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import axios from "axios";
import { RiUser3Fill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";







export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [currLocation, setCurrLocation] = useState("");
  const [enterPin, setEnterPin] = useState("");

  const [blockName, setBlockName] = useState("");
  const CartItems = useSelector((store) => store.cartReducer.Item);
  // const WishListItems = useSelector((store) => store.cartReducer.wishlistItem);
  //const {user, isAuth} = useSelector((store) => store.loginReducer);
  const { user, isAuth } = useSelector((store) => store.auth || { user: null, isAuth: false });
  const [wishLength, setWishLength] = useState(0)

  

  useEffect(() => {
    axios.get(`https://mock-server-crystara.onrender.com/wishlist`)
    .then((res) => {
      setWishLength(res.data.length);
    }).catch((error) => {
      console.log(error);
    })
  },[])

  const handleChange = (e) => {
    // e.preventDefault();
    setEnterPin(e.target.value);
  };
  const handlePincode = () => {
    // setShowPin(enterPin);
    fetch(`https://api.postalpincode.in/pincode/${enterPin}`)
      .then((r) => r.json())
      .then((res) => {
        // console.log(blockName);
        setBlockName(res[0].PostOffice[0].Block);
        // setBlockName(res[0]);
      });
  };


  return (
    <Box width={"100%"} className="sticky"   >
      <Flex
      
        bg={useColorModeValue("#E9D5EF", "gray.100")}
        color={useColorModeValue("gray.600", "white")}
        minH={"7rem"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        width={"100%"}
      >
        <Flex
   
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "flex", xl:"none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex
          cursor={"pointer"}
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          <Link href="/" >
            <Text
              // textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("black", "white")}
              display={{md:"none",sm:"none",xl:"flex",base:"none"}}
            >
              <Image
                src={"/same_color1.png"}
                width={110}
                height={70}
                alt={"logo"}
              />
            </Text>
          </Link>
          <Flex
            w={"70%"}
            display={{ base: "none", md: "none", sm: "none", xl: "flex" }}
            align="center"
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex
          direction={"row"}
          cursor={"pointer"}
          width={{ md: "95%", xl: "50%" }}
          justifyContent="space-between"
          alignItems="flex-end"
         
          // width={"25%"}
        >
          <Flex   w={{base:'30%',sm:'30%',lg:"35%"}} mt='-1rem'>
              <NavSearch  />
          </Flex>
          
          <Flex
            w={{base:'70%',sm:"70%",lg:'62%'}}
            gap={"1rem"}
            textAlign={"center"}
            justifyContent="space-between"
            alignItems={"center"}
            // border='1px solid red'
          > 
           
            <Flex
              justifyContent={"center"}
              alignItems="center"
              // border='1px'
            >
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={"#"}
                    fontSize={"lg"}
                    fontWeight={500}
                    //   color={linkColor}
                    _hover={{
                      textDecoration: "none",
                      color: "green",
                    }}
                  >
                    <IoLocationSharp color='black'
                      size={'1.2rem'}
                      // onClick={() => getlocation()}
                    ></IoLocationSharp  >
                  </Link>
                </PopoverTrigger>

                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={"white"}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                  marginTop="10px"
                  color="purple"
                >
                  <Stack>
                    <h1
                      style={{
                        fontSize: "1.5rem",
                      }}
                    >
                      Pincode
                    </h1>
                    <Input
                      type='number'
                      placeholder="enter your pincode"
                      // onChange={handleChange}
                      maxLength={6}
                      value={enterPin} // Bind the input value to a state variable
                     onChange={(e) => {
                   const value = e.target.value;
                    if (value.length <= 6 && /^[0-9]*$/.test(value)) { // Ensures it's numeric and <= 6 digits
                    handleChange(e); // Custom handle change function
                      }
                     }}
                    ></Input>
                    <Button onClick={handlePincode}>Submit</Button>
                  </Stack>
                </PopoverContent>
              </Popover>
              <Text fontSize={"sm"}>
                {enterPin.length > 0 ? blockName : ""}
              </Text>
            </Flex>

            <Flex
              // border='1px solid blue'
              justifyContent={"center"}
              alignItems="center"
            >
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={"#"}
                    // fontSize={"lg"}
                    fontWeight={500}
                    // color={"white"}
                    _hover={{
                      textDecoration: "none",
                      color: "green",
                    }}
                  >
                    <RiUser3Fill color="black" size={"1.3rem"} />
                  </Link>
                </PopoverTrigger>

                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={"white"}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                  marginTop="10px"
                  color="purple"
                >
                  <Stack>
                    <h1
                      style={{
                        fontSize: "1.5rem",
                      }}
                    >
                      Signup
                    </h1>
                    <Divider />
                    <Link href="/userLogin">
                      {/* <Text>{isAuth ? user.first_name : "User"}</Text> */}
                      <Text>{isAuth && user ? user.first_name : "User"}</Text>
                    </Link>
                    <Divider />
                   
                  </Stack>
                </PopoverContent>
              </Popover>
              {/* <Text fontSize={"sm"}>{showPin ? blockName: ""}</Text> */}
            </Flex>


           
             <Flex  >
             <Link href="/wishList">
              <Button
         
               display="flex"
                gap={0}
                alignItems="center"
                bg={"transparent"}
                _hover={"none"}
              >
                <BsHeartFill size={"1.1rem"}  />
                <Box
                  bgColor={"purple"}
                  borderRadius="full"
                  width={"1vw"}
                  color={"white"}
                  marginLeft={"-0.7rem"}
                  marginTop={"0.8rem"}
               
                >
                  {wishLength}
                </Box>
              </Button>
               </Link>
              </Flex>
            


       
            <Flex >
            <Link href="/cart">
              <Button
                 
                display="flex"
                gap={0}
                alignItems="center"
                bg={"transparent"}
                _hover={"none"}
             
              >
                <IoCart size={"1.7rem"}  />
                <Box
                  bgColor={"purple"}
                  borderRadius="full"
                  width={"1vw"}
                  color={"white"}
                  marginLeft={"-0.7rem"}
                  marginTop={"0.8rem"}
                >
                  {CartItems}
                </Box>
              </Button>
              </Link>
              </Flex>
            


          </Flex>

        </Flex>


      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex
      // gap={"100px"}
      justifyContent={"space-between"}
      // width={{  lg: "100%" }}
      width="100%"
      
    >
      <Stack
        direction={"row"}
        spacing={4}
        // width={{ md: "20%", lg: "100%" }}
        width="100%"

      >
        {NAV_ITEMS.map((navItem) => (
          <Box
          width={"25%"}
            key={navItem.label}
            // border="1px solid black"
          >
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  // fontSize={"0.8rem"}
                  fontSize={{  md: "0.7rem", lg: "0.7rem",xl:"1.4rem"}}
                  fontWeight={500}
                  color={'black'}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Link>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  marginTop="5px"
                  w={"auto"}
                >
                  <Text fontWeight={"bold"}>{navItem.material}</Text>
                  <Flex align={"center"} justifyContent="space-evenly">
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                    <Stack>
                      <Image
                        src={navItem.disImage}
                        alt="Display-image"
                        width={100}
                        // width={"auto"}
                        height={200}
                      />
                    </Stack>
                  </Flex>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </Flex>
  );
};

const NAV_ITEMS = [
  {
    label: "Arrivals",
    href: "/arrival",
  },
  {
    label: "Rings",
    href: "/rings",
    material: "Shop by Metal",
    disImage:
      "https://banner.caratlane.com/live-images/ddb6596303814dd7a618df6c0ee4cd1c.jpg",
    children: [
      {
        label: "Diamond",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png",
      },
      {
        label: "Solitaire",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/d782ca3b7cb14d49bc7f2e12e92a2e80.png",
      },
      {
        label: "Gemestone",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png",
      },
      {
        label: "Gold",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png",
      },
      {
        label: "Yellow Gold",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png",
      },
    ],
  },
  {
    label: "Earrings",
    href: "/earrings",
    material: "Shop by Metal",
    disImage:
      "https://banner.caratlane.com/live-images/88d76b4bce844970b3a522f9818bbf72.jpg",
    children: [
      {
        label: "Diamond",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png",
      },
      {
        label: "Solitaire",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/d782ca3b7cb14d49bc7f2e12e92a2e80.png",
      },
      {
        label: "Gemestone",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png",
      },
      {
        label: "Gold",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png",
      },
      {
        label: "Yellow Gold",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png",
      },
    ],
  },
  {
    label: "Bracelets",
    href: "bracelets",
    material: "Shop by Metal",
    disImage:
      "https://banner.caratlane.com/live-images/35d5813bca7e4d65bd35aa032d180f9c.jpg",
    children: [
      {
        label: "Diamond",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png",
      },
      {
        label: "Platinum",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/9cfaf3c857f942a2a5218ad7aa8c0283.png",
      },
      {
        label: "Gemestone",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png",
      },
      {
        label: "Gold",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png",
      },
      {
        label: "Yellow Gold",
        subLabel: "Find your dream design job",
        href: "#",
        src: "https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png",
      },
    ],
  },
];

const DesktopSubNav = ({ label, href, src }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Flex justifyContent={"space-between"} gap={6} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>

          {/* <Text fontSize={"sm"}>{subLabel}</Text> */}
        </Box>
        <Box>
          <Image src={src} alt="sub-img" width={20} height={20} />
        </Box>
   
      </Flex>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
 
    >
      {NAV_ITEMS.map((navItem) => (
        <>
          <MobileNavItem key={navItem.label} {...navItem} />
        </>
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, material }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        {/* <Text>{material}</Text> */}
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

















































































// import React, { useEffect, useState } from "react";
// import { Box,Icon, Flex, IconButton, Input, Button, Text, Popover, PopoverTrigger, PopoverContent, Stack, Divider, Collapse, useDisclosure, useColorModeValue, Link, Image, Box as ChakraBox } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { BsHeartFill, BsFillHandbagFill } from "react-icons/bs";
// import { IoIosPin, IoIosPerson } from "react-icons/io";
// import axios from "axios";
// import { useSelector } from "react-redux";  // Added missing import for useSelector
// import NavSearch from "./Navsearch";
//  import {

  
//     ChevronDownIcon,
//     ChevronRightIcon,
//   } from "@chakra-ui/icons";

// const NAV_ITEMS = [
//   {
//     label: "Arrivals",
//     href: "/arrival",
//   },
//   {
//     label: "Rings",
//     href: "/rings",
//     material: "Shop by Metal",
//     disImage:
//       "https://banner.caratlane.com/live-images/ddb6596303814dd7a618df6c0ee4cd1c.jpg",
//     children: [
//       {
//         label: "Diamond",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png",
//       },
//       {
//         label: "Solitaire",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/d782ca3b7cb14d49bc7f2e12e92a2e80.png",
//       },
//       {
//         label: "Gemestone",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png",
//       },
//       {
//         label: "Gold",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png",
//       },
//       {
//         label: "Yellow Gold",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png",
//       },
//     ],
//   },
//   {
//     label: "Earrings",
//     href: "/earrings",
//     material: "Shop by Metal",
//     disImage:
//       "https://banner.caratlane.com/live-images/88d76b4bce844970b3a522f9818bbf72.jpg",
//     children: [
//       {
//         label: "Diamond",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png",
//       },
//       {
//         label: "Solitaire",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/d782ca3b7cb14d49bc7f2e12e92a2e80.png",
//       },
//       {
//         label: "Gemestone",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png",
//       },
//       {
//         label: "Gold",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png",
//       },
//       {
//         label: "Yellow Gold",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png",
//       },
//     ],
//   },
//   {
//     label: "Bracelets",
//     href: "bracelets",
//     material: "Shop by Metal",
//     disImage:
//       "https://banner.caratlane.com/live-images/35d5813bca7e4d65bd35aa032d180f9c.jpg",
//     children: [
//       {
//         label: "Diamond",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/9440e36056344d9b87f2595609645a72.png",
//       },
//       {
//         label: "Platinum",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/9cfaf3c857f942a2a5218ad7aa8c0283.png",
//       },
//       {
//         label: "Gemestone",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/d1a7f911832941a397924c2d91b8a4be.png",
//       },
//       {
//         label: "Gold",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png",
//       },
//       {
//         label: "Yellow Gold",
//         subLabel: "Find your dream design job",
//         href: "#",
//         src: "https://banner.caratlane.com/live-images/42312a2603064c83ab56f5991e09285d.png",
//       },
//     ],
//   },
// ];

// const Navbar = () => {
//   const { isOpen, onToggle } = useDisclosure();
//   const [currLocation, setCurrLocation] = useState("");
//   const [enterPin, setEnterPin] = useState("");
//   const [blockName, setBlockName] = useState("");
//   const CartItems = useSelector((store) => store.cartReducer.Item);
//   const { user, isAuth } = useSelector((store) => store.loginReducer);
//   const [wishLength, setWishLength] = useState(0);

//   useEffect(() => {
//     axios
//       .get(`https://mock-server-crystara.onrender.com/wishlist`)
//       .then((res) => {
//         setWishLength(res.data.length);
//       })
//       .catch((error) => {
//         console.error("Error fetching wishlist:", error);
//         setWishLength(0); // Fallback value in case of error
//       });
//   }, []);

//   const handleChange = (e) => {
//     setEnterPin(e.target.value);
//   };

//   const handlePincode = () => {
//     fetch(`https://api.postalpincode.in/pincode/${enterPin}`)
//       .then((r) => r.json())
//       .then((res) => {
//         if (res[0].Status === "Success") {
//           setBlockName(res[0].PostOffice[0].Block);
//         } else {
//           setBlockName("Invalid Pincode");
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching pincode data:", err);
//         setBlockName("Failed to fetch details");
//       });
//   };

//   return (
//     <Box width={"100%"} className="sticky">
//       <Flex
//         bg={useColorModeValue("#E9D5EF", "gray.100")}
//         color={useColorModeValue("gray.600", "white")}
//         minH={"7rem"}
//         py={{ base: 2 }}
//         px={{ base: 4 }}
//         borderBottom={1}
//         borderStyle={"solid"}
//         borderColor={useColorModeValue("gray.200", "gray.900")}
//         align={"center"}
//         width={"100%"}
//       >
//         <Flex
//           flex={{ base: 1, md: "auto" }}
//           ml={{ base: -2 }}
//           display={{ base: "flex", md: "flex", xl: "none" }}
//         >
//           <IconButton
//             onClick={onToggle}
//             icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
//             variant={"ghost"}
//             aria-label={"Toggle Navigation"}
//           />
//         </Flex>
//         <Flex
//           cursor={"pointer"}
//           flex={{ base: 1 }}
//           justify={{ base: "center", md: "start" }}
//         >
//           <Link href="/">
//             <Text
//               fontFamily={"heading"}
//               color={useColorModeValue("gray.800", "white")}
//               display={{ md: "none", sm: "none", xl: "flex", base: "none" }}
//             >
//               <Image
//                 src={"/same_color1.png"}
//                 width={110}
//                 height={70}
//                 alt={"logo"}
//               />
//             </Text>
//           </Link>
//           <Flex w={"70%"} display={{ base: "none", md: "none", sm: "none", xl: "flex" }} align="center" ml={10}>
//             <DesktopNav />
//           </Flex>
//         </Flex>
//         <Flex
//           direction={"row"}
//           spacing={6}
//           cursor={"pointer"}
//           width={{ md: "80%", xl: "50%" }}
//           justifyContent="flex-end"
//           alignItems="flex-end"
//         >
//           <Flex gap={"20px"} textAlign={"center"} justifyContent="space-between" alignItems={"center"}>
//             <Flex>
//               <NavSearch />
//             </Flex>
//             <Flex justifyContent={"center"} alignItems="center">
//               <Popover trigger={"hover"} placement={"bottom-start"}>
//                 <PopoverTrigger>
//                   <Link p={2} href={"#"} fontSize={"lg"} fontWeight={500} _hover={{ textDecoration: "none", color: "green" }}>
//                     <IoIosPin size={"30px"} />
//                   </Link>
//                 </PopoverTrigger>

//                 <PopoverContent
//                   border={0}
//                   boxShadow={"xl"}
//                   bg={"white"}
//                   p={4}
//                   rounded={"xl"}
//                   minW={"sm"}
//                   marginTop="10px"
//                   color="purple"
//                 >
//                   <Stack>
//                     <h1 style={{ fontSize: "1.5rem" }}>Pincode</h1>
//                     <Input placeholder="enter your pincode" onChange={handleChange}></Input>
//                     <Button onClick={handlePincode}>Submit</Button>
//                   </Stack>
//                 </PopoverContent>
//               </Popover>
//               <Text fontSize={"sm"}>{enterPin.length > 0 ? blockName : ""}</Text>
//             </Flex>
//             <Flex justifyContent={"center"} alignItems="center">
//               <Popover trigger={"hover"} placement={"bottom-start"}>
//                 <PopoverTrigger>
//                   <Link p={2} href={"#"} fontWeight={500} _hover={{ textDecoration: "none", color: "green" }}>
//                     <IoIosPerson size={"2vw"} />
//                   </Link>
//                 </PopoverTrigger>

//                 <PopoverContent
//                   border={0}
//                   boxShadow={"xl"}
//                   bg={"white"}
//                   p={4}
//                   rounded={"xl"}
//                   minW={"sm"}
//                   marginTop="10px"
//                   color="purple"
//                 >
//                   <Stack>
//                     <h1 style={{ fontSize: "1.5rem" }}>Signup</h1>
//                     <Divider />
//                     <Link href="/userLogin">
//                       <Text>{isAuth ? user.first_name : "User"}</Text>
//                     </Link>
//                     <Divider />
//                     <Link href="/adminLogin">
//                       <Text>Admin</Text>
//                     </Link>
//                   </Stack>
//                 </PopoverContent>
//               </Popover>
//             </Flex>

//             <Link href="/wishList">
//               <Button display="flex" gap={0} alignItems="center" bg={"transparent"} _hover={"none"}>
//                 <BsHeartFill size={"1.5vw"} />
//                 <ChakraBox
//                   bgColor={"purple"}
//                   borderRadius="full"
//                   width={"1vw"}
//                   color={"white"}
//                   marginLeft={"-0.7rem"}
//                   marginTop={"0.8rem"}
//                 >
//                   {wishLength}
//                 </ChakraBox>
//               </Button>
//             </Link>
//             <Link href="/cart">
//               <Button display="flex" gap={0} alignItems="center" bg={"transparent"} _hover={"none"}>
//                 <BsFillHandbagFill size={"1.5vw"} />
//                 <ChakraBox
//                   bgColor={"purple"}
//                   borderRadius="full"
//                   width={"1vw"}
//                   color={"white"}
//                   marginLeft={"-0.7rem"}
//                   marginTop={"0.8rem"}
//                 >
//                   {CartItems.length}
//                 </ChakraBox>
//               </Button>
//             </Link>
//           </Flex>
//         </Flex>
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <MobileNav />
//       </Collapse>
//     </Box>
//   );
// };

// const DesktopNav = () => {
//   const linkColor = useColorModeValue("gray.600", "gray.200");
//   const linkHoverColor = useColorModeValue("gray.800", "white");
//   const popoverContentBgColor = useColorModeValue("white", "gray.800");

//   return (
//     <Flex justifyContent={"space-between"} width="100%">
//       <Stack direction={"row"} spacing={4} width="100%">
//         {NAV_ITEMS.map((navItem) => (
//           <Box width={"25%"} key={navItem.label}>
//             <Popover trigger={"hover"} placement={"bottom-start"}>
//               <PopoverTrigger>
//                 <Link
//                   p={2}
//                   href={navItem.href ?? "#"}
//                   fontSize={{ md: "0.7rem", lg: "0.7rem", xl: "1.4rem" }}
//                   fontWeight={500}
//                   color={linkColor}
//                   _hover={{
//                     textDecoration: "none",
//                     color: linkHoverColor,
//                   }}
//                 >
//                   {navItem.label}
//                 </Link>
//               </PopoverTrigger>

//               {navItem.children && (
//                 <PopoverContent
//                   border={0}
//                   boxShadow={"xl"}
//                   bg={popoverContentBgColor}
//                   p={4}
//                   rounded={"xl"}
//                   marginTop="5px"
//                   w={"auto"}
//                 >
//                   <Text fontWeight={"bold"}>{navItem.material}</Text>
//                   <Flex align={"center"} justifyContent="space-evenly">
//                     <Stack>
//                       {navItem.children.map((child) => (
//                         <DesktopSubNav key={child.label} {...child} />
//                       ))}
//                     </Stack>
//                     <Stack>
//                       <Image
//                         src={navItem.disImage}
//                         alt="Display-image"
//                         width={100}
//                         height={200}
//                       />
//                     </Stack>
//                   </Flex>
//                 </PopoverContent>
//               )}
//             </Popover>
//           </Box>
//         ))}
//       </Stack>
//     </Flex>
//   );
// };

// const MobileNav = () => {
//   return (
//     <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, href, src }) => {
//   return (
//     <Link
//       href={href}
//       role={"group"}
//       display={"block"}
//       p={2}
//       rounded={"md"}
//       _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//     >
//       <Flex justifyContent={"space-between"} gap={6} align={"center"}>
//         <Box>
//           <Text
//             transition={"all .3s ease"}
//             _groupHover={{ color: "pink.400" }}
//             fontWeight={500}
//           >
//             {label}
//           </Text>

//           {/* <Text fontSize={"sm"}>{subLabel}</Text> */}
//         </Box>
//         <Box>
//           <Image src={src} alt="sub-img" width={20} height={20} />
//         </Box>
//         {/* <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex> */}
//       </Flex>
//     </Link>
//   );
// };

// const MobileNavItem = ({ label, children, href }) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Flex py={2} as={Link} href={href ?? "#"} justify={"space-between"} align={"center"}>
//         <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
//           {label}
//         </Text>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={"all .25s ease-in-out"}
//             transform={isOpen ? "rotate(180deg)" : ""}
//             w={6}
//             h={6}
//           />
//         )}
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <Stack pl={4} align={"start"}>
//           {children && children.map((child) => <Link key={child.label} py={2}>{child.label}</Link>)}
//         </Stack>
//       </Collapse>
//     </Stack>
//   );
// };

// export default Navbar;




































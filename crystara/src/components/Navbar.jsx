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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Select,
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

import { useEffect, useState } from "react";
import { BsBag, BsFillHandbagFill, BsHeart, BsHeartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [currLocation, setCurrLocation] = useState("");
  const [enterPin, setEnterPin] = useState("");

  const [blockName, setBlockName] = useState("");
  const CartItems = useSelector((store) => store.cartReducer.Item);
  const WishListItems = useSelector((store) => store.cartReducer.wishlistItem);

  const handleChange = (e) => {
    e.preventDefault();
    setEnterPin(e.target.value);
  };
  const handlePincode = () => {
    // setShowPin(enterPin);
    fetch(`https://api.postalpincode.in/pincode/${enterPin}`)
      .then((r) => r.json())
      .then((res) => {
        console.log(blockName);
        setBlockName(res[0].PostOffice[0].Block);
        // setBlockName(res[0]);
      });
  };

  // useEffect(()=>{

  // },[enterPin])
  return (
    <Box width={"100%"} className="sticky">
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
              color={useColorModeValue("gray.800", "white")}
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
          spacing={6}
          cursor={"pointer"}
          width={{ md: "80%", xl: "50%" }}
          justifyContent="flex-end"
          alignItems="flex-end"
          // width={"25%"}
        >
          
          <Flex
            gap={"20px"}
            textAlign={"center"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Flex   >
              
              <NavSearch  />
            </Flex>
            <Flex
              justifyContent={"center"}
              alignItems="center"
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
                    <IoIosPin
                      size={"30px"}
                      // onClick={() => getlocation()}
                    ></IoIosPin>
                  </Link>
                </PopoverTrigger>

                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={"blackAlpha.300"}
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
                      placeholder="enter your pincode"
                      onChange={handleChange}
                    ></Input>
                    <Button onClick={handlePincode}>Submit</Button>
                  </Stack>
                </PopoverContent>
              </Popover>
              <Text fontSize={"sm"}>
                {enterPin.length > 0 ? blockName : ""}
              </Text>
            </Flex>
            <Box>
              <BasicUsage />
            </Box>
            <Flex
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
                    <IoIosPerson size={"2vw"} />
                  </Link>
                </PopoverTrigger>

                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={"blackAlpha.100"}
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
                      <Text>User</Text>
                    </Link>
                    <Divider />
                    <Link href="/adminLogin">
                      <Text>Admin</Text>
                    </Link>
                  </Stack>
                </PopoverContent>
              </Popover>
              {/* <Text fontSize={"sm"}>{showPin ? blockName: ""}</Text> */}
            </Flex>

            {/* <Box>
              <IoBagSharp size={"30px"} />
              {"0"}
            </Box> */}
            <Link href="/wishList">
              <Button
                display="flex"
                gap={0}
                alignItems="center"
                bg={"transparent"}
                _hover={"none"}
              >
                <BsHeartFill size={"1.5vw"} />
                <Box
                  bgColor={"purple"}
                  borderRadius="full"
                  width={"1rem"}
                  color={"white"}
                  marginLeft={"-0.7rem"}
                  marginTop={"0.8rem"}
                >
                  {WishListItems}
                </Box>
              </Button>
            </Link>
            <Link href="/cart">
              <Button
                
                display="flex"
                gap={0}
                alignItems="center"
                bg={"transparent"}
                _hover={"none"}
                // borderWidth={2}
                // borderColor="gray.800"
                // borderRadius="full"
              >
                <BsFillHandbagFill size={"1.5vw"} />
                <Box
                  bgColor={"purple"}
                  borderRadius="full"
                  width={"1rem"}
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
                  color={linkColor}
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
        {/* <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex> */}
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

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [country, setCountry] = useState(``);
  const [src, setSrc] = useState(`https://countryflagsapi.com/png/in`);
  const handleCountryClick = () => {
    // getCountryFlag(country).then((r) => r.json()).then((res)=>{
    //   console.log(res)
    // });
    setSrc(`https://countryflagsapi.com/png/${country}`);
    onClose();
    setCountry("");
  };
  return (
    <>
      <Button padding={0} width={"30px"} borderRadius={"50%"}>
        <Image
          onClick={onOpen}
          src={src}
          height={30}
          width={30}
          alt="country-logo"
        />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Country</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Input
              placeholder="Enter Country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            /> */}
            <Select
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Select option"
            >
              <option value="in">India</option>
              <option value="br">Brazil</option>
              <option value="ae">United Arab Emirates</option>
              <option value="au">Australia</option>
              <option value="bd">Bangladesh</option>
              <option value="jp">Japan</option>
              <option value="gb-eng">England</option>
              <option value="iq">Iraq</option>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3} onClick={handleCountryClick}>
              Update
            </Button>
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

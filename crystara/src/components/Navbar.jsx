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
import { BsBag, BsHeart } from "react-icons/bs";
import { getCountryFlag } from "@/redux/ProductPage/action";
// import styles from '@/styles/Home.module.css'
// import "../styles/globals.css";
// import styles from "../styles/Home.module.css"

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [currLocation, setCurrLocation] = useState("");
  const [enterPin, setEnterPin] = useState("");

  const [blockName, setBlockName] = useState("");
  // const getlocation = () => {
  //   fetch(`https://ipapi.co/json`)
  //     .then((res) => res.json())
  //     .then((r) => {
  //       console.log(r);
  //       setCurrLocation(r.city);
  //     });
  // };
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
    <Box className="sticky">
      <Flex
        bg={useColorModeValue("#E9D5EF", "gray.100")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
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
          <Text
            // textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            <Image
              src={"/same_color1.png"}
              width={110}
              height={70}
              alt={"logo"}
            />
          </Text>

          <Flex display={{ base: "none", md: "flex" }} align="center" ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          cursor={"pointer"}
        >
          <Stack minW={"250px"}>
            <NavSearch />
          </Stack>
          <Flex gap={"20px"} textAlign={"center"} justifyContent="center">
            <Flex justifyContent={"center"} alignItems="center">
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
                      onClick={() => getlocation()}
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
                    <Heading>Pincode</Heading>
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
            <Flex justifyContent={"center"} alignItems="center">
              <Popover trigger={"hover"} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Link
                    p={2}
                    href={"#"}
                    fontSize={"lg"}
                    fontWeight={500}
                    // color={"white"}
                    _hover={{
                      textDecoration: "none",
                      color: "green",
                    }}
                  >
                    <IoIosPerson size={"30px"} />
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
                    <Heading>SignUP</Heading>
                    <Divider />
                    <Text>User</Text>
                    <Divider />
                    <Text>Admin</Text>
                  </Stack>
                </PopoverContent>
              </Popover>
              {/* <Text fontSize={"sm"}>{showPin ? blockName: ""}</Text> */}
            </Flex>

            {/* <Box>
              <IoBagSharp size={"30px"} />
              {"0"}
            </Box> */}

            <Button
              variant="outline"
              colorScheme="gray"
              display="flex"
              gap={2}
              alignItems="center"
              borderWidth={2}
              borderColor="gray.800"
              borderRadius="full"
              //   ref={btnRef}
              //   onClick={onOpen}
            >
              <BsHeart />
              {"0"}
            </Button>
            <Button
              variant="outline"
              colorScheme="gray"
              display="flex"
              gap={2}
              alignItems="center"
              borderWidth={2}
              borderColor="gray.800"
              borderRadius="full"
              //   ref={btnRef}
              //   onClick={onOpen}
            >
              <BsBag />
              {"0"}
            </Button>
          </Flex>
        </Stack>
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
    <Flex gap={"100px"} justifyContent={"space-between"}>
      <Stack direction={"row"} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? "#"}
                  fontSize={"lg"}
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
                  minW={"8xl"}
                >
                  <Text fontWeight={"bold"}>{navItem.material}</Text>
                  <Flex align={"center"} justifyContent="space-evenly" >
                    <Stack>
                      {navItem.children.map((child) => (
                        <DesktopSubNav key={child.label} {...child} />
                      ))}
                    </Stack>
                    <Stack>
                      <Image src={navItem.disImage} alt="Display-image" width={500} height={200} />
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
    label: "New Arrivals",
    href: "/newArrivals",
  },
  {
    label: "Rings",
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
    label: "Bracelets & Bangles",
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
  // {
  //   label: "Earrings",
  //   children: [
  //     {
  //       label: "Explore Design Work",
  //       subLabel: "Trending Design to inspire you",
  //       href: "#",
  //     },
  //     {
  //       label: "New & Noteworthy",
  //       subLabel: "Up-and-coming Designers",
  //       href: "#",
  //     },
  //   ],
  // },
  // {
  //   label: "Bracelets & Bangles",
  //   children: [
  //     {
  //       label: "Explore Design Work",
  //       subLabel: "Trending Design to inspire you",
  //       href: "#",
  //     },
  //     {
  //       label: "New & Noteworthy",
  //       subLabel: "Up-and-coming Designers",
  //       href: "#",
  //     },
  //   ],
  // },
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

const MobileNavItem = ({ label, children, href,material }) => {
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

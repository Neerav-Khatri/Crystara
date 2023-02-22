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
import NavSearch from "./navsearch";
import Image from "next/image";
import { IoIosHeart, IoIosPerson, IoIosPin } from "react-icons/io";
import { IoBagSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { BsBag } from "react-icons/bs";
// import styles from '@/styles/Home.module.css'
// import "../styles/globals.css";
// import styles from "../styles/Home.module.css"

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [currLocation, setCurrLocation] = useState("");
  const [enterPin, setEnterPin] = useState("");
  const [showPin, setShowPin] = useState("");
  const [blockName, setBlockName] = useState("");
  const getlocation = () => {
    fetch(`https://ipapi.co/json`)
      .then((res) => res.json())
      .then((r) => {
        console.log(r);
        setCurrLocation(r.city);
      });
  };
  const handleChange = (e) => {
    e.preventDefault();
    setEnterPin(e.target.value);
  };
  const handlePincode = () => {
    setShowPin(enterPin);
     fetch(`https://api.postalpincode.in/pincode/${enterPin}`)
       .then((r) => r.json())
       .then((res) => {
        console.log(blockName)
         setBlockName(res[0].PostOffice[0].Block);
         // setBlockName(res[0]);
       });
  };

  // useEffect(()=>{
   
  // },[enterPin])
  return (
    <Box className="sticky">
      <Flex
        bg={useColorModeValue("purple.100", "gray.100")}
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
            <Image src={"/mylogo.png"} width={110} height={70} alt={"logo"} />
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
              <Text fontSize={"sm"}>{showPin ? blockName : ""}</Text>
            </Flex>
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
                    <IoIosPerson size={"30px"} />
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
                >
                  <Stack>
                    <Text>SignUp</Text>
                    <Divider />
                    <Text>Login</Text>
                  </Stack>
                </PopoverContent>
              </Popover>
              {/* <Text fontSize={"sm"}>{showPin ? blockName: ""}</Text> */}
            </Flex>

            {/* <Box>
              <IoIosHeart size={"30px"} />
            </Box> */}
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
              <IoIosHeart size={"30px"} />
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
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    </Flex>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
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
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
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

const NAV_ITEMS = [
  {
    label: "New Arrivals",
    href: "#",
  },
  {
    label: "Rings",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Earrings",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Bracelets & Bangles",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
];

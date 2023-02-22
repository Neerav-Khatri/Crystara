import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { HiArrowLeft } from "react-icons/hi";
import Image from "next/image";
import FooterPaymentMethod from "@/components/Footer-Payment-Method";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function PaymentMethod() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (
    <>
      <Box
        className="sticky"
        bg={useColorModeValue("#E9D5EF", "gray.900")}
        px={4}
      >
        <Flex h={20} alignItems={"center"} gap={10}>
          <Flex alignItems={"center"}>
            <Link>
            <Stack direction={"row"} spacing={7}>
              <HiArrowLeft size={30}  />
            </Stack>
            </Link>
          </Flex>
          <Box>
            <Image
              src={"/same_color1.png"}
              alt="logo"
              width={150}
              height={70}
            />
          </Box>
        </Flex>
      </Box>
      <Box height={"650px"}>

      </Box>
      <FooterPaymentMethod/>
    </>
  );
}

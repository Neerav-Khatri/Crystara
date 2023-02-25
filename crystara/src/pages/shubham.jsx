import { Box, Flex, Image, Input, Button, Checkbox } from "@chakra-ui/react";

function App() {
  return (
    <Box bg="#231535" height="500px">
      <Flex alignItems="center" justifyContent="center" height="100%">
        <Box textAlign="center">
          <Image src="https://via.placeholder.com/150" alt="placeholder image" />
          <h1 style={{color:"white"}}>Sign up to be a CaratLane Insider</h1>
          <Input placeholder="Enter your email" mt={4} size="lg" />
          <Button colorScheme="teal" mt={4}>
            Sign Up
          </Button>
          <Flex mt={4} alignItems="center" justifyContent="center">
            <Checkbox size="lg" mr={2} />
            <Box as="span">I identify as male</Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default App;

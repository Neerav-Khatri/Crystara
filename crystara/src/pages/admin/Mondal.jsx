
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Select,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

const initial = {
  src1: "",
  src2: "",
  currentPrice: "",
  tag: "",
  name: "",
};
function Mondal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formData, setFormData] = useState(initial);

  const initialRef = useRef(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <Button fontSize={{base:'10' , md:'sm'}} onClick={onOpen}>EDIT</Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            
              <FormControl >
                <Stack spacing={3} p={8} border="1px solid purple" m={5}>
                  <Input
                    ref={initialRef}
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
                  <Input
                    placeholder="Tag"
                    size="md"
                    name="tag"
                    onChange={handleChange}
                  />
                  <Input
                    type="number"
                    placeholder="Current Price "
                    size="md"
                    name="currentPrice"
                    onChange={handleChange}
                  />
                  <Input
                    placeholder="Name"
                    size="md"
                    name="name"
                    onChange={handleChange}
                  />
                </Stack>
              </FormControl>;
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Mondal;

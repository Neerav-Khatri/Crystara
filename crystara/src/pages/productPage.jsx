import ProductCard from '@/components/ProductCard';
import { getProducts, postProduct } from '@/redux/ProductPage/action';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Checkbox, CheckboxGroup, Code, Flex, Grid, IconButton, Menu, MenuButton, MenuItem, MenuList, Select, Show, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "../styles/product.module.css";

const ProductPage = () => {
    const dispatch = useDispatch();
    const [material, setMaterial] = useState("");
    const {product} = useSelector((store) => store.productReducer);
    const router = useRouter();

    useEffect(() => {
        dispatch(getProducts());
    },[material])

    // const handleWishAdd = (data) => {
    //     // postProduct(data);
    //     axios.post(`https://naughty-frog-cummerbund.cyclic.app/wishlist`, data)
    //     .then((res) => console.log(res))
    //     .catch((error) => console.log(error));
    // }

   

    return (
    <div>
        <Box>
            <Flex direction="column">
                <Box>
                    <Image src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Newin/01/Desktop_1920-x560_toplisting.jpg" alt="Banner Image" width={1920} height={560}/>
                </Box>
                <Flex bgColor="#f2d0f7" p="1rem" justifyContent="space-between">
                    <Box>
                        <Show above='lg'>
                            <Flex className={styles.flex}>
                                <Box className={styles.boxes}>All</Box>
                                <Box className={styles.boxes}>Try at Home</Box>
                                <Box className={styles.boxes}>Designs in Store</Box>
                                <Box className={styles.boxes}>Fast Delivery</Box>
                                <Box className={styles.boxes}>New In</Box>
                            </Flex>
                        </Show>
                        <Show below='lg'>
                            <Menu>
                                <MenuButton as={IconButton} aria-label='Options' icon={<HamburgerIcon color="#8863fb"/>} />
                                <MenuList bgColor="#ffe1e5">
                                    <MenuItem bgColor="#ffe1e5">All</MenuItem>
                                    <MenuItem bgColor="#ffe1e5">Try at Home</MenuItem>
                                    <MenuItem bgColor="#ffe1e5">Designs in Store</MenuItem>
                                    <MenuItem bgColor="#ffe1e5">Fast Delivery</MenuItem>
                                    <MenuItem bgColor="#ffe1e5">New In</MenuItem>
                                </MenuList>
                            </Menu>
                        </Show>
                    </Box>
                    <Box>
                        <Select placeholder="SORT BY" bg="white" _hover={{cursor: "pointer"}} fontSize="rem">
                            <option value="asc">Price Low to High</option>
                            <option value="desc">Price High to Low</option>
                        </Select>
                    </Box>
                </Flex>
            </Flex>
            
            <Text className={styles.variety}><Code fontWeight="bold" variant="none" fontSize="1vw">New Arrivals</Code>{product.length} Designs</Text>
        </Box>

        {/* Filter and card section */}

        <button onClick={() => router.push('/productPage?material=Pearls')}>Checking</button>

        <Box border="1px solid red" p="10px">
            <Flex p="10px" justifyContent={"space-around"}>
                <Box w="22%" >
                    <Box w="85%" m="auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderTopRadius="20px">
                        <Box className={styles.filter}><Text>Filter By</Text></Box>
                        <Box p="20px">
                            <CheckboxGroup colorScheme='green'>
                                <Text fontSize="1.2vw" fontWeight="semibold" mb="10px">Products Types</Text>
                                <Stack spacing="2" direction="column">
                                    <Checkbox value='arrival'><Text className={styles.filterCheck}>New Arrival</Text></Checkbox>
                                    <Checkbox value='rings'><Text className={styles.filterCheck}>Rings</Text></Checkbox>
                                    <Checkbox value='earrings'><Text className={styles.filterCheck}>Earrings</Text></Checkbox>
                                    <Checkbox value="bracelets"><Text className={styles.filterCheck}>Bracelets</Text></Checkbox>
                                </Stack>
                            </CheckboxGroup>
                            <br/><hr/><br/>
                            <CheckboxGroup colorScheme='green' onChange={(e) => setMaterial(e)}>
                                <Text fontSize="1.2vw" fontWeight="semibold" mb="10px">Material</Text>
                                <Stack spacing="2" direction="column">
                                    <Checkbox value='Diamond'><Text className={styles.filterCheck}>Diamond</Text></Checkbox>
                                    <Checkbox value='Solitaire'><Text className={styles.filterCheck}>Solitaire</Text></Checkbox>
                                    <Checkbox value='Gemstone'><Text className={styles.filterCheck}>Gemstone</Text></Checkbox>
                                    <Checkbox value="Gold"><Text className={styles.filterCheck}>Gold</Text></Checkbox>
                                    <Checkbox value="Pearl"><Text className={styles.filterCheck}>Pearl</Text></Checkbox>
                                </Stack>
                            </CheckboxGroup>
                        </Box>
                    </Box>
                </Box>

                {/* ProductCard */}

                <Grid templateColumns={{base: "repeat(1,60vw)", sm: "repeat(2,47%)", md: "repeat(3,31%)"}} justifyContent={"space-around"} gap="30px 10px" w="70%">
                    {product.map((element) => <ProductCard key={element.id} data={element}/>)}
                </Grid>
            </Flex>
        </Box>
    </div>
  )
}

export default ProductPage;
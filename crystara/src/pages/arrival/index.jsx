import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/redux/ProductPage/action';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Checkbox, CheckboxGroup, Code, Flex, Grid, IconButton, Menu, MenuButton, MenuItem, MenuList, Select, Show, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "../../styles/product.module.css";

const Arrival = () => {
    const dispatch = useDispatch();
    const [material, setMaterial] = useState("");
    const {product} = useSelector((store) => store.productReducer);
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const router = useRouter();
    
    useEffect(() => {
        // router.push("/productPage", {
        //     query: {material : material}
        // })
        dispatch(getProducts("arrival"));
    },[])

    const handleWishAdd = (data) => {
        axios
          .post(`https://mock-server-crystara.onrender.com/wishlist`, data)
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
    }

    const handleWishDelete = (id) => {
        axios.delete(`https://mock-server-crystara.onrender.com/wishlist/${id}`)
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
    }

    const sortAsc = () => {
        data.length ? data.sort((a,b) => {
            if (a.currentPrice>b.currentPrice) return 1;
            if (a.currentPrice<b.currentPrice) return -1;
            return 0;
        }) :
        product.sort((a,b) => {
            if (a.currentPrice>b.currentPrice) return 1;
            if (a.currentPrice<b.currentPrice) return -1;
            return 0;
        })
        setCount(count+1);
        console.log(product);
    }

    const sortDesc = () => {
        data.length ? data.sort((a,b) => {
            if (a.currentPrice>b.currentPrice) return -1;
            if (a.currentPrice<b.currentPrice) return 1;
            return 0;
        }) :
        product.sort((a,b) => {
            if (a.currentPrice>b.currentPrice) return -1;
            if (a.currentPrice<b.currentPrice) return 1;
            return 0;
        })
        setCount(count+1);
        console.log(product);
    }

    useEffect(() => {
        filterData();
    },[material])

    const filterData = () => {
        let res = product.filter((ele) => {
            return ele.material===material;
        })
        setData(res)
    }

    const handleDetailPage = (id) => {
        router.push(`/arrival/${id}`);
    }

  return (
    <>
    <Head>
        <title>Product Page</title>
    </Head>

    <div>
        <Navbar />
    
        {/* Banner and Sort section */}

        <Box>
            <Flex direction="column">
                <Box>
                    <Image src="https://cdn.caratlane.com/media/static/images/V4/2023/CL/02-FEB/AppBanner/Newin/01/Desktop_1920-x560_toplisting.jpg" alt="Banner Image" width={1920} height={560}  />
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
                        <Select placeholder="SORT BY" bg="white" _hover={{cursor: "pointer"}} fontSize="rem" onChange={(e) => e.target.value==="asc"? sortAsc() : sortDesc()}>
                            <option value="asc">Price Low to High</option>
                            <option value="desc">Price High to Low</option>
                        </Select>
                    </Box>
                </Flex>
            </Flex>
            
            <Text className={styles.variety}><Code fontWeight="bold" variant="none" fontSize="1vw">New Arrivals</Code>{data.length? data.length : product.length} Designs</Text>
        </Box>

        {/* Filter and card section */}

        <Box p="10px">
            <Flex p="10px" justifyContent={"space-around"}>
                <Box w="22%" >
                    <Box w="85%" m="auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderTopRadius="20px">
                        <Box className={styles.filter}><Text>Filter By</Text></Box>
                        <Box p="20px">
                            <CheckboxGroup colorScheme='green'>
                                <Text fontSize="1.2vw" fontWeight="semibold" mb="10px">Products Types</Text>
                                <Stack spacing="2" direction="column">
                                    <Link href={"/arrival"}><Checkbox value='arrival'><Text className={styles.filterCheck}>New Arrival</Text></Checkbox></Link>
                                    <Link href={"/rings"}><Checkbox value='rings'><Text className={styles.filterCheck}>Rings</Text></Checkbox></Link>
                                    <Link href={"/earrings"}><Checkbox value='earrings'><Text className={styles.filterCheck}>Earrings</Text></Checkbox></Link>
                                    <Link href={"bracelets"}><Checkbox value="bracelets"><Text className={styles.filterCheck}>Bracelets</Text></Checkbox></Link>
                                </Stack>
                            </CheckboxGroup>
                            <br/><hr/><br/>
                            <CheckboxGroup colorScheme='green' onChange={(e) => setMaterial(e.join(""))}>
                                <Text fontSize="1.2vw" fontWeight="semibold" mb="10px">Material</Text>
                                <Stack spacing="2" direction="column">
                                    <Checkbox value='Diamond'><Text className={styles.filterCheck}>Diamond</Text></Checkbox>
                                    <Checkbox value='Gemstone'><Text className={styles.filterCheck}>Gemstone</Text></Checkbox>
                                    <Checkbox value="Pearls"><Text className={styles.filterCheck}>Pearl</Text></Checkbox>
                                </Stack>
                            </CheckboxGroup>
                        </Box>
                    </Box>
                </Box>

                {/* ProductCard */}

                <Grid templateColumns={{base: "repeat(1,60vw)", sm: "repeat(2,47%)", md: "repeat(3,31%)"}} justifyContent={"space-around"} gap="30px 10px" w="70%">
                    {data.length? data.map((element) => <ProductCard key={element.id} data={element} handleWishAdd={handleWishAdd} handleWishDelete={handleWishDelete} handleDetailPage={handleDetailPage}/> ) : 
                    product.filter((item, index) => {return index>=6*(page-1) && index<(0+page*6)}).map((element) => <ProductCard key={element.id} data={element} handleWishAdd={handleWishAdd} handleWishDelete={handleWishDelete} handleDetailPage={handleDetailPage}/>)}
                </Grid>
            </Flex>
        </Box>

        {/* Pagination */}

        <Flex justifyContent={"center"} alignItems={"center"} gap={"15px"} p={"10px"}>
            {page===1 ? null : <Button bgColor={"#f2d0f7"} color={"#8863fb"} onClick={() => setPage(page-1)}>Previous</Button>}
            <Text bgColor={"#f2d0f7"} color={"#8863fb"} p={"1vh"} borderRadius={"20px"}>{page}</Text>
            {page===product.length/6 ? null : <Button bgColor={"#f2d0f7"} color={"#8863fb"} onClick={() => setPage(page+1)}>Next</Button>}
        </Flex>

        <Footer />
    </div>
    </>
  )
}

export default Arrival;
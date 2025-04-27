import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { getProducts} from '@/redux/ProductPage/action';
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

const Bracelets = () => {
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
        dispatch(getProducts("bracelets"));
    },[])

    const handleWishAdd = (data) => {
        axios
          .post(`https://mock-server-crystara.onrender.com/wishlist`, data)
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
    }

    const handleWishDelete = (id) => {
        axios
          .delete(`https://mock-server-crystara.onrender.com/wishlist/${id}`)
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
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
        router.push(`/bracelets/${id}`);
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
                    <Image src="https://banner.caratlane.com/live-images/dab8c9bccb50479fbad968e7ea6ea450.webp" alt="Banner Image" width={1920} height={560}  />
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
            
            <Text className={styles.variety} fontSize={'0.9rem'} fontWeight={700}><Code fontWeight={600} variant="none" fontSize="1rem">Bracelets</Code>{data.length? data.length : product.length} Designs</Text>
        </Box>

        {/* Filter and card section */}

        <Box p="1px">
            <Flex p="5px" justifyContent={"space-around"}>
            <Box w="30%" >
                    <Box w={{base:'90%',md:"70%",lg:"60%"}} m="auto"  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" borderTopRadius="20px">
                        <Box className={styles.filter}   fontSize={'0.9rem'} ><Text>Filter By</Text></Box>
                        <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} p="0.2rem" >
                            <CheckboxGroup colorScheme='green'>
                                <Text  fontWeight="semibold" mb="10px" fontSize={'0.7rem'}>Products Types</Text>
                                <Stack spacing="2" direction="column">
                                    <Link href={"/arrival"}><Checkbox value='arrival'><Text className={styles.filterCheck}  fontSize={'0.7rem'}  >New Arrival</Text></Checkbox></Link>
                                    <Link href={"/rings"}><Checkbox value='rings'><Text className={styles.filterCheck} fontSize={'0.7rem'}  >Rings</Text></Checkbox></Link>
                                    <Link href={"/earrings"}><Checkbox value='earrings'><Text className={styles.filterCheck} fontSize={'0.7rem'}  >Earrings</Text></Checkbox></Link>
                                    <Link href={"bracelets"}><Checkbox value="bracelets"><Text className={styles.filterCheck} fontSize={'0.7rem'}  >Bracelets</Text></Checkbox></Link>
                                </Stack>
                            </CheckboxGroup>
                            <br/><hr/><br/>
                            <CheckboxGroup colorScheme='green' onChange={(e) => setMaterial(e.join(""))}>
                                <Text fontWeight="semibold" mb="10px" fontSize={'0.7rem'} >Material</Text>
                                <Stack spacing="2" direction="column">
                                    <Checkbox value='Diamond'><Text className={styles.filterCheck} fontSize={'0.7rem'} >Diamond</Text></Checkbox>
                                    <Checkbox value='Solitaire'><Text className={styles.filterCheck} fontSize={'0.7rem'} >Solitaire</Text></Checkbox>
                                </Stack>
                            </CheckboxGroup>
                        </Flex>
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

export default Bracelets;
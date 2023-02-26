import Head from 'next/head';
import {Flex,Box,FormControl,FormLabel,Input,Checkbox,Stack,Button,Heading,Text,useColorModeValue, useToast, Code} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import {FaFacebookSquare} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import { adminLogin, loginUser } from '@/redux/login/action.login';
import { useRouter } from 'next/router';

const AdminLogin = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const router = useRouter();
    const [adminData, setAdminData] = useState({
        "email" : "",
        "password" : "",
    });

    const {admin} = useSelector((store) => store.loginReducer);
    console.log(admin);

    const handleAdminLogin = () => {
        if (adminData.email==="" || adminData.password===""){
            toast({
                title: "Fill the required data",
                status: "error",
                position: "top",
                isClosable: true,
            })
            return;
        }

        dispatch(adminLogin(adminData));
        toast({
            title: "Login Successful",
            status: "success",
            position: "top",
            isClosable: true,
        });
        router.push(`/admin/dashboard`);
    }

    return (
        <>
            <Head>
                <title>Admin Login</title>
            </Head>

            {/* Body */}

            <div>
                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                    bg={"#e9e2dc"}>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'} gap={"20px"}>
                        <Heading fontSize={'4xl'}>Admin account login</Heading>
                    </Stack>


                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" onChange={(e) => setAdminData({...adminData, "email" : e.target.value})}/>
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" onChange={(e) => setAdminData({...adminData, "password" : e.target.value})} />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            <Code color={'blue.400'} bg={"white"}>Forgot password?</Code>
                            </Stack>
                            <Button
                            bg={"#8863fb"}
                            color={'white'}
                            _hover={{
                                bg: 'white',
                                color: '#8863fb',
                                border: '1px solid #8863fb'
                            }}
                            onClick={handleAdminLogin} >
                            Sign in
                            </Button>
                        </Stack>
                        </Stack>
                    </Box>
                    </Stack>
                </Flex>
            </div>
        </>
    )
}

export default AdminLogin;
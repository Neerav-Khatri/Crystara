import Head from 'next/head';
import {Flex,Box,FormControl,InputRightElement,InputGroup,FormLabel,Input,Checkbox,Stack,Button,Heading,Text,useColorModeValue, useToast, Code} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import {FaFacebookSquare} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import { loginUser } from '@/redux/login/action.login';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { GrView, GrFormViewHide } from 'react-icons/gr';


const UserLogin = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const router = useRouter();
    const [detail, setDetail] = useState({
        "email" : "",
        "password" : "",
    });

    // const handleLogin = () => {
    //     if (detail.email==="" || detail.password===""){
    //         toast({
    //             title: "Fill the required data",
    //             status: "error",
    //             position: "top",
    //             isClosable: true,
    //         })
    //         return;
    //     }

    //     dispatch(loginUser(detail));
    //     toast({
    //         title: "Login Successful",
    //         status: "success",
    //         position: "top",
    //         isClosable: true,
    //     });
    //     router.push(`/`);
    // }

    
const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        if (detail.email === "" || detail.password === "") {
            toast({
                title: "Fill the required data",
                status: "error",
                position: "top",
                isClosable: true,
            });
            return;
        }
    
        dispatch(loginUser(detail)) // Dispatching the login action
            .then((res) => {
                // Assuming the API returns a token in response.data.token
                if (res && res.token) {
                    // Store the token in localStorage
                    localStorage.setItem('authToken', res.token);
    
                    toast({
                        title: "Login Successful",
                        status: "success",
                        position: "top",
                        isClosable: true,
                    });
                    router.push(`/`); // Navigate to the homepage or dashboard after successful login
                } else {
                    toast({
                        title: "Invalid Credentials",
                        status: "error",
                        position: "top",
                        isClosable: true,
                    });
                }
            })
            .catch((error) => {
                toast({
                    title: error.response?.data?.msg || "Login failed. Please try again.",
                    status: "error",
                    position: "top",
                    isClosable: true,
                });
            });
    };
    

    return (
        <>
            <Head>
                <title>User Login</title>
            </Head>

            {/* Body */}

            <div>
                <Navbar />

                <Flex
                    minH={'100vh'}
                    align={'center'}
                    justify={'center'}
                    bg={"#e9e2dc"}>
                    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'} gap={"20px"}>
                        <Heading fontSize={'4xl'}>Login to your account</Heading>
                        <Flex gap={"20px"}>
                            <Flex borderRadius={"10px"} p={"10px"} alignItems={"center"} gap={"10px"} bg={"white"}>
                                <FaFacebookSquare color={"blue"} />
                                <Text>Facebook</Text>
                            </Flex>
                            <Flex borderRadius={"10px"} p={"10px"} alignItems={"center"} gap={"10px"} bg={"white"}>
                                <FcGoogle />
                                <Text>Google</Text>
                            </Flex>
                        </Flex>
                    </Stack>

                    <Text textAlign={"center"}>Or</Text>

                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email" onChange={(e) => setDetail({...detail, "email" : e.target.value})}/>
                        </FormControl>

                        {/* <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" onChange={(e) => setDetail({...detail, "password" : e.target.value})} />
                        </FormControl> */}

                        
                           <FormControl id="password">
    <FormLabel>Password</FormLabel>
    <InputGroup>
        <Input 
            type={showPassword ? 'text' : 'password'}  // Toggle between text and password type
            onChange={(e) => setDetail({ ...detail, "password": e.target.value })} 
        />
        <InputRightElement h={'full'}>
            <Button
                variant={'ghost'}
                onClick={() => setShowPassword((prevShowPassword) => !prevShowPassword)} // Toggle show/hide password
            >
                {showPassword ? <GrFormViewHide /> : <GrView />}  {/* Display appropriate icon */}
            </Button>
        </InputRightElement>
    </InputGroup>
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
                            onClick={handleLogin} >
                            Sign in
                            </Button>
                            <Stack pt={2}>
                                <Text align={'center'}>
                                Don't have an account? <Link href={"/userSignUp"}><Code color={"blue"} bg={"white"}>Sign up</Code></Link>
                                </Text>
                            </Stack>
                        </Stack>
                        </Stack>
                    </Box>
                    </Stack>
                </Flex>

                <Footer />
            </div>
        </>
    )
}

export default UserLogin;













// import Head from 'next/head';
// import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Heading, Text, useColorModeValue, useToast, Code } from '@chakra-ui/react';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';  // Updated to useSelector for fetching user data
// import Link from 'next/link';
// import { FaFacebookSquare } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { loginUser } from '@/redux/login/action.login';
// import { useRouter } from 'next/router';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const UserLogin = () => {
//     const toast = useToast();
//     const dispatch = useDispatch();
//     const router = useRouter();
//     const [detail, setDetail] = useState({
//         "email": "",
//         "password": "",
//     });

//     // Change 1: Fetch user data from Redux store for validation
//     const user = useSelector((state) => state.auth.user); // Assuming user data is stored in `auth` reducer

//     const handleLogin = () => {
//         // Change 2: Validation - Check if both fields are filled
//         if (detail.email === "" || detail.password === "") {
//             toast({
//                 title: "Please fill in both fields.",
//                 status: "error",
//                 position: "top",
//                 isClosable: true,
//             });
//             return;
//         }

//         // Change 3: Validate against Redux stored data
//         if (!user || detail.email !== user.email || detail.password !== user.password) {
//             toast({
//                 title: "Invalid credentials.",
//                 status: "error",
//                 position: "top",
//                 isClosable: true,
//             });
//             return;
//         }

//         // If credentials are valid, dispatch login action
//         dispatch(loginUser(detail));
//         toast({
//             title: "Login Successful",
//             status: "success",
//             position: "top",
//             isClosable: true,
//         });
//         router.push(`/`);
//     }

//     return (
//         <>
//             <Head>
//                 <title>User Login</title>
//             </Head>

//             <div>
//                 <Navbar />

//                 <Flex
//                     minH={'100vh'}
//                     align={'center'}
//                     justify={'center'}
//                     bg={"#e9e2dc"}>
//                     <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//                         <Stack align={'center'} gap={"20px"}>
//                             <Heading fontSize={'4xl'}>Login to your account</Heading>
//                             <Flex gap={"20px"}>
//                                 <Flex borderRadius={"10px"} p={"10px"} alignItems={"center"} gap={"10px"} bg={"white"}>
//                                     <FaFacebookSquare color={"blue"} />
//                                     <Text>Facebook</Text>
//                                 </Flex>
//                                 <Flex borderRadius={"10px"} p={"10px"} alignItems={"center"} gap={"10px"} bg={"white"}>
//                                     <FcGoogle />
//                                     <Text>Google</Text>
//                                 </Flex>
//                             </Flex>
//                         </Stack>

//                         <Text textAlign={"center"}>Or</Text>

//                         <Box
//                             rounded={'lg'}
//                             bg={useColorModeValue('white', 'gray.700')}
//                             boxShadow={'lg'}
//                             p={8}>
//                             <Stack spacing={4}>
//                                 <FormControl id="email">
//                                     <FormLabel>Email address</FormLabel>
//                                     <Input
//                                         type="email"
//                                         value={detail.email}
//                                         onChange={(e) => setDetail({ ...detail, "email": e.target.value })}
//                                     />
//                                 </FormControl>
//                                 <FormControl id="password">
//                                     <FormLabel>Password</FormLabel>
//                                     <Input
//                                         type="password"
//                                         value={detail.password}
//                                         onChange={(e) => setDetail({ ...detail, "password": e.target.value })}
//                                     />
//                                 </FormControl>
//                                 <Stack spacing={10}>
//                                     <Stack
//                                         direction={{ base: 'column', sm: 'row' }}
//                                         align={'start'}
//                                         justify={'space-between'}>
//                                         <Checkbox>Remember me</Checkbox>
//                                         <Code color={'blue.400'} bg={"white"}>Forgot password?</Code>
//                                     </Stack>
//                                     <Button
//                                         bg={"#8863fb"}
//                                         color={'white'}
//                                         _hover={{
//                                             bg: 'white',
//                                             color: '#8863fb',
//                                             border: '1px solid #8863fb'
//                                         }}
//                                         onClick={handleLogin} // Trigger login only after validation
//                                     >
//                                         Sign in
//                                     </Button>
//                                     <Stack pt={2}>
//                                         <Text align={'center'}>
//                                             Don't have an account? <Link href={"/userSignUp"}><Code color={"blue"} bg={"white"}>Sign up</Code></Link>
//                                         </Text>
//                                     </Stack>
//                                 </Stack>
//                             </Stack>
//                         </Box>
//                     </Stack>
//                 </Flex>

//                 <Footer />
//             </div>
//         </>
//     )
// }

// export default UserLogin;

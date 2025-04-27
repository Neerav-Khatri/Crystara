// import Head from 'next/head';

// import {Flex,Box,FormControl,FormLabel,Input,InputGroup,HStack,InputRightElement,Stack,Button,Heading,Text,useColorModeValue, Code, RadioGroup, Radio, useToast,} from '@chakra-ui/react';
// import { useState } from 'react';
// import { GrFormViewHide, GrView } from 'react-icons/gr';
// import Link from 'next/link';
// import {FaFacebookSquare} from "react-icons/fa";
// import {FcGoogle} from "react-icons/fc";
// import { useDispatch } from 'react-redux';
// import { registerUser } from '@/redux/login/action.login';
// import { useRouter } from 'next/router';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';

// const UserSignUp = () => {
//     const [showPassword, setShowPassword] = useState(false);
//     const toast = useToast();
//     const dispatch = useDispatch();
//     const router = useRouter();
//     const [data, setData] = useState({
//         "first_name" : "",
//         "last_name" : "",
//         "number": "",
//         "email" : "",
//         "password" : "",
//         "gender": "",
//     });

//     const handleRegister = () => {
//         if (data.first_name==="" || data.number==="" || data.email==="" || data.password==="" || data.gender===""){
//             toast({
//                 title: "Fill the required data",
//                 status: "error",
//                 position: "top",
//                 isClosable: true,
//             })
//             return;
//         }

//         dispatch(registerUser(data));
//         toast({
//             title: "Welcome to Crystara Family",
//             status: "success",
//             position: "top",
//             isClosable: true,
//         })
//         router.push(`/userLogin`);


//     }

//     const enteringName = (e, field) => {
//         let value = e.target.value.replace(/[^a-zA-Z\s]/g, '');  // Allow only letters and spaces
//         setData({...data, [field]: value});  // Dynamically update first_name or last_name
//       };

  

//     return (
//         <>
//             <Head>
//                 <title>User Sign-Up</title>
//             </Head>

//             {/* Body */}

//             <div>
//                 <Navbar />

//                 <Flex
//                     minH={'100vh'}
//                     align={'center'}
//                     justify={'center'}
//                     bg={"#e9e2dc"}>
//                     <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//                     <Stack align={'center'} gap={"20px"}>
//                         <Heading fontSize={'4xl'} textAlign={'center'}>
//                         Sign up with Crystara
//                         </Heading>
//                         <Flex gap={"20px"}>
//                             <Flex borderRadius={"10px"} p={"10px"} alignItems={"center"} gap={"10px"} bg={"white"}>
//                                 <FaFacebookSquare color={"blue"} />
//                                 <Text>Facebook</Text>
//                             </Flex>
//                             <Flex borderRadius={"10px"} p={"10px"} alignItems={"center"} gap={"10px"} bg={"white"}>
//                                 <FcGoogle />
//                                 <Text>Google</Text>
//                             </Flex>
//                         </Flex>
//                     </Stack>

//                     <Text textAlign={"center"}>Or</Text>

//                     <Box
//                         rounded={'lg'}
//                         bg={useColorModeValue('white', 'gray.700')}
//                         boxShadow={'lg'}
//                         p={8} >
//                         <Stack spacing={4}>
//                         <HStack>
//                             <Box>
//                             <FormControl id="firstName" isRequired>
//                                 <FormLabel>First Name</FormLabel>
//                                 {/* <Input type="text" onChange={(e) => setData({...data, "first_name" : e.target.value})} /> */}
//                                 <Input  type="text"  value={data.first_name}  onChange={(e) => enteringName(e, "first_name")}  />
//                             </FormControl>
//                             </Box>
//                             <Box>
//                             <FormControl id="lastName">
//                                 <FormLabel>Last Name</FormLabel>
//                                 {/* <Input type="text" onChange={(e) => setData({...data, "last_name" : e.target.value})} /> */}
//                                 <Input type="text" value={data.last_name}onChange={(e) => enteringName(e, "last_name")}  />
//                             </FormControl>
//                             </Box>
//                         </HStack>
//                         <FormControl id="number" isRequired>
//                             <FormLabel>Mobile Number</FormLabel>
//                             <Input type="number" onChange={(e) => setData({...data, "number" : e.target.value})} />
//                         </FormControl>
//                         <FormControl id="email" isRequired>
//                             <FormLabel>Email address</FormLabel>
//                             <Input type="email" onChange={(e) => setData({...data, "email" : e.target.value})} />
//                         </FormControl>
//                         <FormControl id="password" isRequired>
//                             <FormLabel>Password</FormLabel>
//                             <InputGroup>
//                             <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setData({...data, "password" : e.target.value})} />
//                             <InputRightElement h={'full'}>
//                                 <Button
//                                 variant={'ghost'}
//                                 onClick={() =>
//                                     setShowPassword((showPassword) => !showPassword)
//                                 }>
//                                 {showPassword ? <GrFormViewHide /> : <GrView />}
//                                 </Button>
//                             </InputRightElement>
//                             </InputGroup>
//                         </FormControl>
//                         <RadioGroup onChange={(e) => setData({...data, "gender" : e})}>
//                             <Stack direction='row'>
//                                 <Radio value="male">Male</Radio>
//                                 <Radio value="female">Female</Radio>
//                                 <Radio value="Prefer not to say">Prefer not to say</Radio>
//                             </Stack>
//                         </RadioGroup>
//                         <Stack spacing={10} pt={2}>
//                             <Button
//                             loadingText="Submitting"
//                             size="lg"
//                             bg={"#8863fb"}
//                             color={'white'}
//                             _hover={{
//                                 bg: 'white',
//                                 color: '#8863fb',
//                                 border: '1px solid #8863fb'
//                             }}
//                             onClick={handleRegister} >
//                             Sign up
//                             </Button>
//                         </Stack>
//                         <Stack pt={6}>
//                             <Text align={'center'}>
//                             Already a user? <Link href={"/userLogin"}><Code color={"blue"} bg={"white"}>Login</Code></Link>
//                             </Text>
//                         </Stack>
//                         </Stack>
//                     </Box>
//                     </Stack>
//                 </Flex>

//                 <Footer />
//             </div>
//         </>
//     )
// }

// export default UserSignUp;



















import Head from 'next/head';
import { Flex, Box, FormControl, FormLabel, Input, InputGroup, HStack, InputRightElement, Stack, Button, Heading, Text, useColorModeValue, Code, RadioGroup, Radio, useToast, } from '@chakra-ui/react';
import { useState } from 'react';
import { GrFormViewHide, GrView } from 'react-icons/gr';
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from 'react-redux';
import { registerUser, loginUser } from '@/redux/login/action.login'; // Updated with loginUser
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import axios from 'axios';

const UserSignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const toast = useToast();
    const dispatch = useDispatch();
    const router = useRouter();
    const [data, setData] = useState({
        "first_name": "",
        "last_name": "",
        "number": "",
        "email": "",
        "password": "",
        "gender": "",
    });

    // Handle User Registration
    const handleRegister = () => {
        
        if (data.first_name === "" || data.number === "" || data.email === "" || data.password === "" || data.gender === "") {
            toast({
                title: "Fill the required data",
                status: "error",
                position: "top",
                isClosable: true,
            })
            return;
        }
        const registerData = {
           
            name :data.first_name,
            email: data.email,
            password: data.password,
         
        };

        dispatch(registerUser(registerData));
        toast({
            title: "Welcome to Crystara Family",
            status: "success",
            position: "top",
            isClosable: true,
        })
        router.push(`/userLogin`);
    }


   

    // const handleRegister = () => {
    //     // Perform basic validation for email and password only
    //     if (data.email === "" || data.password === "") {
    //         toast({
    //             title: "Email and Password are required",
    //             status: "error",
    //             position: "top",
    //             isClosable: true,
    //         })
    //         return;
    //     }
    
    //     // Prepare data for POST request
    //     const registerData = {
           
    //         name :data.first_name,
    //         email: data.email,
    //         password: data.password,
         
    //     };
    
    //     // Make axios POST request to register user
    //     axios.post('https://modesens1.onrender.com/user/register', registerData)
    //         .then((response) => {
    //             // Handle success
    //             if (response.status === 200) {
    //                 dispatch(registerUser(data)); // Dispatch redux action to save user data
    //                 toast({
    //                     title: "Welcome to Crystara Family",
    //                     status: "success",
    //                     position: "top",
    //                     isClosable: true,
    //                 });
    //                 router.push(`/userLogin`);
    //             }
    //         })
    //         .catch((error) => {
    //             // Handle error
    //             toast({
    //                 title: "Registration failed. Please try again.",
    //                 status: "error",
    //                 position: "top",
    //                 isClosable: true,
    //             });
    //             console.error("Registration error:", error);
    //         });
    // }
    












    //**User Login Logic - New Addition**
    const handleLogin = () => {
        if (data.email === "" || data.password === "") {
            toast({
                title: "Please enter email and password",
                status: "error",
                position: "top",
                isClosable: true,
            })
            return;
        }

        dispatch(loginUser(data)); // Dispatching login action
        toast({
            title: "Logged in successfully",
            status: "success",
            position: "top",
            isClosable: true,
        })
        router.push(`/dashboard`); // Redirect to a dashboard or homepage after login
    }


 
    

  

  

  
    
    
    
    
    









    // Form fields logic for first_name and last_name
    const enteringName = (e, field) => {
        let value = e.target.value.replace(/[^a-zA-Z\s]/g, '');  // Allow only letters and spaces
        setData({ ...data, [field]: value });  // Dynamically update first_name or last_name
    };

    return (
        <>
            <Head>
                <title>User Sign-Up</title>
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
                            <Heading fontSize={'4xl'} textAlign={'center'}>
                                Sign up with Crystara
                            </Heading>
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
                            p={8} >
                            <Stack spacing={4}>
                                <HStack>
                                    <Box>
                                        <FormControl id="firstName" isRequired>
                                            <FormLabel>First Name</FormLabel>
                                            <Input type="text" value={data.first_name} onChange={(e) => enteringName(e, "first_name")} />
                                        </FormControl>
                                    </Box>
                                    <Box>
                                        <FormControl id="lastName">
                                            <FormLabel>Last Name</FormLabel>
                                            <Input type="text" value={data.last_name} onChange={(e) => enteringName(e, "last_name")} />
                                        </FormControl>
                                    </Box>
                                </HStack>
                                <FormControl id="number" isRequired>
                                    <FormLabel>Mobile Number</FormLabel>
                                    <Input type="number" onChange={(e) => setData({ ...data, "number": e.target.value })} />
                                </FormControl>
                                <FormControl id="email" isRequired>
                                    <FormLabel>Email address</FormLabel>
                                    <Input type="email" onChange={(e) => setData({ ...data, "email": e.target.value })} />
                                </FormControl>
                                <FormControl id="password" isRequired>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setData({ ...data, "password": e.target.value })} />
                                        <InputRightElement h={'full'}>
                                            <Button
                                                variant={'ghost'}
                                                onClick={() =>
                                                    setShowPassword((showPassword) => !showPassword)
                                                }>
                                                {showPassword ? <GrFormViewHide /> : <GrView />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <RadioGroup onChange={(e) => setData({ ...data, "gender": e })}>
                                    <Stack direction='row'>
                                        <Radio value="male">Male</Radio>
                                        <Radio value="female">Female</Radio>
                                        <Radio value="Prefer not to say">Prefer not to say</Radio>
                                    </Stack>
                                </RadioGroup>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        loadingText="Submitting"
                                        size="lg"
                                        bg={"#8863fb"}
                                        color={'white'}
                                        _hover={{
                                            bg: 'white',
                                            color: '#8863fb',
                                            border: '1px solid #8863fb'
                                        }}
                                        onClick={handleRegister} >
                                        Sign up
                                    </Button>
                                    {/* **Login Button (New Addition) */}
                                   
                                </Stack>
                                <Stack pt={6}>
                                    <Text align={'center'}>
                                        Already a user? <Link href={"/userLogin"}><Code color={"blue"} bg={"white"}>Login</Code></Link>
                                    </Text>
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

export default UserSignUp;

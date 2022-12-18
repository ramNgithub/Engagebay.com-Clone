import React, { useEffect, useState } from 'react'
import { FormControl, FormLabel, Image, Stack, Input, InputGroup, InputLeftAddon, InputRightAddon, Button, Center, Text, Icon, VStack, Heading, HStack, Box, InputRightElement } from '@chakra-ui/react'
import { FcGoogle, FcPrivacy } from "react-icons/fc"
import { useDispatch, useSelector } from 'react-redux'
import { GetData } from '../Redux/action'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()
    const toast = useToast()
    useEffect(() => {
        dispatch(GetData)
    }, [])
    let initlogin = {
        email: "",
        password: ""
    }
    const [show, setShow] = React.useState(false)
    const [logindata, setlogindata] = useState(initlogin)
    const handleClick = () => setShow(!show)

    const dispatch = useDispatch()
    const store = useSelector((store) => store.users)
    console.log("store: ", store);

    const change = (e) => {
        let { name, value } = e.target
        setlogindata({ ...logindata, [name]: value })
    }


    const login = () => {
        if (logindata.email != "" && logindata.password != "") {
            let s = store.filter((el) => {
                return el.email === logindata.email && el.password === logindata.password
            })
            if (s.length != 0) {
                toast({
                    title: 'Login Successfully.',
                    description: "Your Logged In",
                    status: 'success',
                    duration: 5000,
                    position: "top",
                    isClosable: true,
                })
            } else {
                toast({
                    title: 'Email or Password Wrong',
                    description: "Something Went Wrong",
                    // status: 'failed',
                    duration: 9000,
                    position: "top",
                    isClosable: true,
                })
            }
        } else {
            toast({
                title: 'Input Fields Are Emply',
                description: "Please Fill all Inputs",
                // status: 'failed',
                duration: 9000,
                position: "top",
                isClosable: true,
            })
        }
        setlogindata(initlogin)
    }

    return (
        <>
            <Box w="30%" h="580px" borderRadius={10} boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;" border="0px solid red" m="auto">
                <VStack mt={5} justifyContent="space-between" h="25%">
                    <Image w="40%" src="https://www.engagebay.com/new/assets/img/engagebay-logo.svg " />
                    <Heading fontFamily="arial" size="xl" fontWeight={3}>Get Started for FREE</Heading>
                    <HStack><Text>Don't have an account yet?</Text><Text color="blue">Sign up</Text></HStack>
                </VStack>
                <form style={{ border: "0px solid black", height: "fill-content" }}>
                    <FormControl >
                        <Input onChange={change} name='email' variant='filled' m={5} type="email" size='lg' w="90%" placeholder='Email' />
                        <InputGroup w="90%" m={5} size='lg'>
                            <Input
                                name='password'
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                onChange={change}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>                    </FormControl>
                </form>
                <Center><Button size="lg" _hover={{ bg: "#2F6AD9" }} w="90%" bg="#2F6AD9" color="white" onClick={() => {
                    login()
                    navigate("/")
                }} >LOGIN</Button>
                </Center>
                <Text textAlign="center">Or</Text>
                <Center><Button size="lg" _hover={{ bg: "gray.100" }} leftIcon={<FcGoogle />} w="90%" color="#2F6AD9" >SIGN UP WITH G SUITE</Button>
                </Center>
                <Center mt={5}>
                    <Text fontSize={12}>©2022 Market Growth, Inc. All Rights Reserved.</Text>
                </Center>
                <Center>
                    <Text fontSize={10} >Privacy Policy</Text>
                </Center>
            </Box>

        </>
    )
}

export default Login

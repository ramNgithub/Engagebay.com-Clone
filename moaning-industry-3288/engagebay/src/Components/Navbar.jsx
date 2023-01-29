import { HStack, Box, Image, Stack, MenuButton, Button, MenuList, Menu, MenuItem, } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();

    return (
        <>
            <Stack h={["40px", "50px", "90px"]} border="0px solid red" >
                <HStack justifyContent="space-between" border="0px solid black" w={["85%", "85%", "82%"]} m="auto" h="100%">
                    <Box border="0px solid green" width={["10%", "25%", "13%"]}>
                        <Link to="/"><Image src="https://www.engagebay.com/new/assets/img/engagebay-logo.svg " /></Link>
                    </Box>
                    <HStack border="0px solid red" justifyContent="space-evenly" w="70%">
                        <Menu>
                            <MenuButton bg="none" _hover={{ bg: "none", "color": "#573098" }} as={Button} rightIcon={<ChevronDownIcon />}>
                                Products
                            </MenuButton>
                            <MenuList  >
                                <MenuItem _hover={{ bg: "orange.200" }}><Link to="/dailer">Calling</Link></MenuItem>
                                <MenuItem _hover={{ bg: "orange.200" }}>Email Signature</MenuItem>
                                <MenuItem _hover={{ bg: "orange.200" }}>Email Tracker</MenuItem>
                                <MenuItem _hover={{ bg: "orange.200" }}>Email Validator</MenuItem>
                                <MenuItem _hover={{ bg: "orange.200" }}>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                        <Button fontSize="15px" fontFamily="-apple-system, BlinkMacSystemFont, Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol" bg="none" _hover={{ "bg": "none", "color": "#573098" }} ><Link to="/price">Pricing</Link></Button>
                        {/* <Menu> */}
                            {/* <MenuButton bg="none" _hover={{ bg: "none", "color": "#573098" }} as={Button} rightIcon={<ChevronDownIcon />}> */}
                        <Button fontSize="15px" fontFamily="-apple-system, BlinkMacSystemFont, Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol" bg="none" _hover={{ "bg": "none", "color": "#573098" }} ><Link to="/resource">Resource</Link></Button> 
                            {/* </MenuButton> */}
                            {/* <MenuList  >
                                <MenuItem _hover={{ bg: "orange.200" }}>UTM Builder</MenuItem>
                                <MenuItem _hover={{ bg: "orange.200" }}>Email Signature</MenuItem>
                                <MenuItem _hover={{ bg: "orange.200" }}>Email Tracker</MenuItem>
                                <MenuItem _hover={{ bg: "orange.200" }}>Email Validator</MenuItem>
                                <MenuItem _hover={{ bg: "orange.200" }}>Attend a Workshop</MenuItem>
                            </MenuList> */}
                        {/* </Menu>                        */}
                         <Menu>
                            <MenuButton bg="none" _hover={{ bg: "none", "color": "#573098" }} as={Button} rightIcon={<ChevronDownIcon />}>
                                Free Tools
                            </MenuButton>
                            <MenuList  >
                                <MenuItem _hover={{ bg: "orange.200" }}>UTM Builder</MenuItem>
                                <MenuItem _hover={{ bg: "orange.200" }}>Email Signature</MenuItem>
                                <MenuItem _hover={{ bg: "orange.200" }}>Email Tracker</MenuItem>
                                <MenuItem _hover={{ bg: "orange.200" }}>Email Validator</MenuItem>
                                <MenuItem _hover={{ bg: "orange.200" }}>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                        <Button fontSize="15px" fontFamily="-apple-system, BlinkMacSystemFont, Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol" bg="none" _hover={{ "bg": "none", "color": "#573098" }}><Link to="/blog">Blog</Link> </Button>
                        <Button fontSize="15px" fontFamily="-apple-system, BlinkMacSystemFont, Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol" bg="none" _hover={{ "bg": "none", "color": "#573098" }}
                            onClick={
                                () => { navigate("login") }
                            }>Login</Button>
                        <Button fontSize="15px" h="30px" w="90px" fontFamily="-apple-system, BlinkMacSystemFont, Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol" bg="#6639B3" borderRadius="2px" _hover={{ "bg": "#6639B3" }} color="white" >Free Demo</Button>
                        <Button fontSize="15px" h="30px" w="90px" border="0px solid red" fontFamily="-apple-system, BlinkMacSystemFont, Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol" bg="#FF885E" borderRadius="2px" _hover={{ "bg": "#FF885E" }} color="white"
                        > <Link to="/signup">Free SignUp</Link></Button>
                    </HStack>
                </HStack>
            </Stack>
        </>
    )
}

export default Navbar

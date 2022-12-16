import { HStack, Box, Image, Stack, MenuButton, Button, MenuList, Menu, MenuItem, } from '@chakra-ui/react'
import React from 'react'
import { ChevronDownIcon } from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <Stack h={["40px", "50px", "80px"]} border="0px solid red" >
                <HStack justifyContent="space-between" border="0px solid black" w={["85%", "85%", "82%"]} m="auto" h="100%">
                    <Box border="0px solid green" width={["30%", "25%", "17%"]}>
                        <Image src='https://www.engagebay.com/new/assets/img/engagebay-logo.svg' />
                    </Box>
                    <HStack border="0px solid red" justifyContent="space-evenly" w="70%">
                        <Button fontSize="15px" fontFamily="-apple-system, BlinkMacSystemFont, Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol" bg="none" _hover={{ "bg": "none", "color": "#573098" }} rightIcon={<ChevronDownIcon />}>Products</Button>
                        <Button fontSize="15px" fontFamily="-apple-system, BlinkMacSystemFont, Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol" bg="none" _hover={{ "bg": "none", "color": "#573098" }} >Pricing</Button>
                        <Button fontSize="15px" fontFamily="-apple-system, BlinkMacSystemFont, Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol" bg="none" _hover={{ "bg": "none", "color": "#573098" }} rightIcon={<ChevronDownIcon />}>Resources</Button>
                        <Menu >
                            <MenuButton    _expanded={{ bg: 'orange.200' }} bg="none" _hover={{"bg": "none", "color": "#573098"}} as={Button} rightIcon={<ChevronDownIcon />}>
                              Free Tools
                            </MenuButton>
                            <MenuList >
                                <MenuItem _hover={{bg:"orange.200"}}>UTM Builder</MenuItem>
                                <MenuItem _hover={{bg:"orange.200"}}>Email Signature</MenuItem>
                                <MenuItem _hover={{bg:"orange.200"}}>Email Tracker</MenuItem>
                                <MenuItem _hover={{bg:"orange.200"}}>Email Validator</MenuItem>
                                <MenuItem _hover={{bg:"orange.200"}}>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                        <Button fontSize="15px" fontFamily="-apple-system, BlinkMacSystemFont, Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol" bg="none" _hover={{ "bg": "none", "color": "#573098" }}>Blog</Button>
                        <Button fontSize="15px" fontFamily="-apple-system, BlinkMacSystemFont, Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol" bg="none" _hover={{ "bg": "none", "color": "#573098" }}>Login</Button>
                        <Button fontSize="15px" fontFamily="-apple-system, BlinkMacSystemFont, Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol" bg="#573098" borderRadius="2px" _hover={{ "bg": "#573098" }} color="white" >Free Demo</Button>
                        <Button fontSize="15px" fontFamily="-apple-system, BlinkMacSystemFont, Poppins, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,Segoe UI Symbol" bg="#FF885E" borderRadius="2px" _hover={{ "bg": "#FF7342" }} color="white" onClick={()=>{
                            navigate("signup")
                        }} >Free SignUp</Button>
                    </HStack>
                </HStack>
            </Stack>
        </>
    )
}

export default Navbar
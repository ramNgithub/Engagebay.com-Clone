import {
  FormControl,
  FormLabel,
  Image,
  Stack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Button,
  Center,
  Text,
  Icon,
  VStack,
  Heading,
  HStack,
  Box,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FcGoogle, FcPrivacy } from "react-icons/fc";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  let initsate = {
    name: "",
    email: "",
    mobile: "",
    website: "",
    password: "",
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [formdata, setformdata] = useState(initsate);
  const toast = useToast();
  const handelAdd = (data) => {
    if (
      formdata.name != "" &&
      formdata.email != "" &&
      formdata.mobile != "" &&
      formdata.website != "" &&
      formdata.password != ""
    ) {
      // dispatch(PostData(data))
      console.log(data);
      fetch("https://dizzy-pig-dress.cyclic.app/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log("res", res);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      toast({
        title: "Inputs Are Empty",
        description: "Please fill all the details",
        position: "top",
        // status: 'success',
        duration: 9000,
        isClosable: true,
      });
    }
    navigate("/login");
  };

  const submit = (e) => {
    e.preventDefalut();
  };

  const change = (e) => {
    let { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  // console.log(formdata);

  return (
    <>
      <Box
        w="30%"
        h="830px"
        borderRadius={10}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px;"
        border="0px solid red"
        m="auto"
      >
        <VStack h="25%" justifyContent="space-evenly">
          <Image
            w="50%"
            src="https://www.engagebay.com/new/assets/img/engagebay-logo.svg"
          />
          <Heading fontFamily="arial" size="xl" fontWeight={3}>
            Get Started for FREE
          </Heading>
          <HStack>
            <Text>Already have an account?</Text>
            <Text color="blue">Login</Text>
          </HStack>
        </VStack>
        <form
          onSubmit={submit}
          style={{ border: "0px solid black", height: "fill-content" }}
        >
          <FormControl>
            <Input
              onChange={change}
              name="name"
              variant="filled"
              m={5}
              size="lg"
              w="90%"
              placeholder="Name"
            />
            <Input
              onChange={change}
              name="email"
              variant="filled"
              m={5}
              size="lg"
              type="email"
              w="90%"
              placeholder="Email"
            />
            <InputGroup m={5} size="lg" w="90%">
              <InputLeftAddon size="lg" children="+91" />
              <Input
                onChange={change}
                name="mobile"
                type="tel"
                size="lg"
                placeholder="phone number"
              />
            </InputGroup>
            <InputGroup w="90%" m={5} size="lg">
              <InputLeftAddon size="lg" children="https://" />
              <Input onChange={change} name="website" placeholder="Yoursite" />
              <InputRightAddon size="lg" children=".com" />
            </InputGroup>
            <InputGroup w="90%" m={5} size="lg">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                name="password"
                onChange={change}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </form>
        <Center>
          <Button
            size="lg"
            _hover={{ bg: "#2F6AD9" }}
            w="90%"
            bg="#2F6AD9"
            color="white"
            onClick={() => {
              handelAdd(formdata);
            }}
          >
            Sign-Up
          </Button>
        </Center>
        <Text textAlign="center">Or</Text>
        <Center>
          <Button
            size="lg"
            _hover={{ bg: "gray.100" }}
            leftIcon={<FcGoogle />}
            w="90%"
            color="#2F6AD9"
          >
            SIGN UP WITH G SUITE
          </Button>
        </Center>
        <Center mt={5}>
          <Text fontSize={12}>
            ©2022 Market Growth, Inc. All Rights Reserved.
          </Text>
        </Center>
        <Center>
          <Text fontSize={10}>Privacy Policy</Text>
        </Center>
      </Box>
    </>
  );
};

export default SignUp;
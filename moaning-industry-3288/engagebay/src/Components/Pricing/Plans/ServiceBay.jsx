import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ServiceBay = () => {
  return (
    <Box>
      <Box border="1px solid red">
        <Heading as="h1" size="md">
          Service Bay
        </Heading>
        <Text>Free Help Desk & Free Live Chat for support teams</Text>
        <Button colorScheme="blue">Free Forever → </Button>
        <Text>No credit card required.</Text>
      </Box>
    </Box>
  );
};

export default ServiceBay;

import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const GirlData = () => {
  return (
    <Flex w="80%" m="auto">
      <Box>
        <Image src="https://cdn5.engagebay.com/new/assets/img/lilahbulock.webp" />
      </Box>
      <Box background="#1b2a4e" w="100%" color="white">
        <Box w="80%" m="auto" mt="5%">
          <Heading as="h4" size="md" lineHeight="35px">
            Engagebay has got to be the most powerful all-in-one tool for small
            businesses you just dont get this level of features with many
            tools(and trust me when i say i tried so many) its even difficult to
            calculate how many essential business tools and software your
            effectively replacing with just one software
          </Heading>
          <Heading size="md" mt="5%">Lilach Bullock</Heading>
          <Text>Business Coach | International Speaker | Top Women Social Media Influencer</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default GirlData;

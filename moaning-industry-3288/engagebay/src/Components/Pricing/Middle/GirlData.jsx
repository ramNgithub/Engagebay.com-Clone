import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const GirlData = () => {
  return (
    <Box w="80%" m="auto" h="80vh" mt="3%" display="grid" gridTemplateColumns={{sm:"repeat(1, 1fr)", md:"repeat(2, 1fr)", lg:"repeat(2, 1fr)"}}>
      <Box m="auto" w="100%">
        <Image w="100%" h="80vh" src="https://cdn5.engagebay.com/new/assets/img/lilahbulock.webp" />
      </Box>
      <Box background="#1b2a4e" w="100%" color="white">
        <Box w="80%" m="auto" mt="5%">
          <Heading as="h5" size={{ sm: "2px", md: "1rem", lg: "3rem"}} lineHeight="30px">
            Engagebay has got to be the most powerful all-in-one tool for small
            businesses you just dont get this level of features with many
            tools(and trust me when i say i tried so many) its even difficult to
            calculate how many essential business tools and software your
            effectively replacing with just one software
          </Heading>
          <Heading size={{ sm: "2px", md: "1rem", lg: "3rem"}} mt="5%">Lilach Bullock</Heading>
          <Text size={{ sm: "2px", md: "1rem", lg: "3rem"}}>Business Coach | International Speaker | Top Women Social Media Influencer</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default GirlData;

import React, { ReactNode } from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Spacer,
} from "@chakra-ui/react";

type HeroProps = {
  children?: ReactNode;
};

const Hero = ({ children }: HeroProps) => {
  return (
    <Flex direction="row" mt="10em" minW="100%" minH="40vh" px="5em">
      <Flex direction="column" alignSelf="center" w="40%">
        <Text
          color={"white"}
          fontWeight={700}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "3xl", md: "8xl" })}
        >
          Frag Stack Squad
        </Text>
        <Text
          color={"orange.400"}
          fontWeight={100}
          lineHeight={1.2}
          fontSize={useBreakpointValue({ base: "2xl", md: "5xl" })}
        >
          Here is a simple demo introducing the team with our favorite jokes
        </Text>
      </Flex>
    </Flex>
  );
};

export default Hero;

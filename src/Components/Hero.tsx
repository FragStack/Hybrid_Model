import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type HeroProps = {
  children?: ReactNode;
};

const Hero = ({ children }: HeroProps) => {
  return <Flex> Hero{children}</Flex>;
};

export default Hero;

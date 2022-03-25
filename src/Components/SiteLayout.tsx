import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Hero from "./Hero";

type SiteLayoutProps = {
  children?: ReactNode;
};

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <Flex h={"100vh"} minH={"100%"} direction={"column"} align={"center"}>
      {children}
    </Flex>
  );
};

export default SiteLayout;

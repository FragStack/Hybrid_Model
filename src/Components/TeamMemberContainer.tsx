import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";

type TeamMemberContainerProps = {
  children?: ReactNode;
};

const TeamMemberContainer = ({ children }: TeamMemberContainerProps) => {
  return (
    <main>
      <Flex>team stuff</Flex>
    </main>
  );
};

export default TeamMemberContainer;

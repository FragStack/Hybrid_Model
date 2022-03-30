import { Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Member } from "../constants/members";

type MemberBoxProps = {
  children?: ReactNode;
  member: Member;
};

const MemberBox = ({ children, member }: MemberBoxProps) => {
  return (
    <Flex
      w="80%"
      mt="2em"
      bg="#071424"
      color="#77c8e0"
      borderRadius="4em"
      border="3px solid #08182c"
      minH="30rem"
      sx={{
        boxShadow:
          " -10px -10px 10px 1px #5894a71f,inset -20px -20px 33px #03080f, inset 20px 20px 29px #0b1d33",
      }}
    >
      {member.username}
    </Flex>
  );
};

export default MemberBox;

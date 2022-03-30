import { VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { memberList } from "../constants/members";

import MemberBox from "./MemberBox";

type MemberListProps = {
  children?: ReactNode;
};

const members = memberList.map((member) => {
  return <MemberBox key={member.username} member={member} />;
});

const MemberList = ({ children }: MemberListProps) => {
  return (
    <VStack mt="6em" spacing={100} align="center" minW="100%">
      {members}
    </VStack>
  );
};

export default MemberList;

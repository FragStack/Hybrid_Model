import { Flex, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Member } from "../constants/members";
import Joke from "./Joke";
import ProfilePic from "./ProfilePic";

type MemberBoxProps = {
  children?: ReactNode;
  member: Member;
};

const MemberBox = ({ children, member }: MemberBoxProps) => {
  return (
    <Flex
      w="75%"
      mt="2em"
      bg="#071424"
      color="#77c8e0"
      borderRadius="10em"
      border="3px solid #08182c"
      minH="19rem"
      
      align="center"
      sx={{
        boxShadow:
          " -10px -10px 10px 1px #5894a71f,inset -20px -20px 33px #03080f, inset 20px 20px 29px #0b1d33",
      }}
    >
      <Flex direction="column" my="2em" mx="6em">
        <Heading textAlign="center" color="orange.400">
          {member.username}
        </Heading>
        <ProfilePic picUrl={member.profilePic} />
      </Flex>
      <Joke jokeLeadUp={member.jokeLeadUp} punchline={member.punchline} />
    </Flex>
  );
};

export default MemberBox;

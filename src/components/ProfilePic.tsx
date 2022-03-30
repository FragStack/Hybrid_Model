import { Box, Image } from "@chakra-ui/react";
import React from "react";

type ProfilePicProps = {
  picUrl: string;
};

const ProfilePic = ({ picUrl }: ProfilePicProps) => {
  return (
    <Box
      m="1em"
      p="1em"
      borderRadius="100%"
      bg="#071424"
      boxShadow=" 20px 20px 60px #03080e, -20px -20px 60px #0b203a;"
    >
      <Image
        src={picUrl}
        boxSize="12em"
        borderRadius="full"
        alt="user profile pic"
        boxShadow="inset -20em -20px 60px #03080e, inset 20px 20px 60px #0b203a"
      />
    </Box>
  );
};

export default ProfilePic;

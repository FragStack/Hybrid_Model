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
      boxSize="14em"
      borderRadius="100%"
      bg="#071424"
      boxShadow=" 2px 2px 6px #FFFFFF, -2px -2px 6px #FFFFFF;"
    >
      <Image
        src={picUrl}
        boxSize="12em"
        borderRadius="full"
        objectFit='cover'
        alt="user profile pic"
        boxShadow="inset -20em -20px 60px #03080e, inset 20px 20px 60px #0b203a"
      />
    </Box>
  );
};

export default ProfilePic;

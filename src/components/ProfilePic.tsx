import { Box, Image } from "@chakra-ui/react";
import React from "react";

type ProfilePicProps = {
  picUrl: string;
};

const ProfilePic = ({ picUrl }: ProfilePicProps) => {
  return (
    <Box
      m="1em"
      p="1.5em"
      boxSize="15em"
      borderRadius="100%"
      bg="#143865"
      boxShadow="5px 5px 10px #081628, -5px -5px 10px #205aa2;"
    >
      <Image
        src={picUrl}
        boxSize="12em"
        borderRadius="full"
        objectFit='cover'
        alt="user profile pic"
      />
    </Box>
  );
};

export default ProfilePic;

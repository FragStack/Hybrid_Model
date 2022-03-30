import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

type JokeProps = {
  jokeLeadUp: string;
  punchline: string;
};

const Joke = ({ jokeLeadUp, punchline }: JokeProps) => {
  return (
    <Flex flex={1} direction="column" align="center">
      <Heading>{jokeLeadUp}</Heading>
      <Heading>{punchline}</Heading>
    </Flex>
  );
};

export default Joke;

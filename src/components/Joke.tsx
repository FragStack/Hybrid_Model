import { Flex, Heading, Accordion,AccordionItem,AccordionButton,Box,AccordionIcon,AccordionPanel} from "@chakra-ui/react";
import React from "react";

type JokeProps = {
  jokeLeadUp: string;
  punchline: string;
};

const Joke = ({ jokeLeadUp, punchline }: JokeProps) => {
  return (
    <Flex flex={1} direction="column" align="center">
      <Accordion allowToggle mt ="1em" >
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{  color: 'white' }}>
              <Box flex='1' textAlign='left'>
              <Heading>{jokeLeadUp}</Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <Heading>{punchline}</Heading>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      
    </Flex>
  );
};

export default Joke;

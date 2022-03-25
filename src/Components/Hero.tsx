import React, { ReactNode } from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';


type HeroProps = {
  children?: ReactNode;
};

const Hero = ({ children }: HeroProps) => {
  return (
    <Flex 
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://www.esa.int/var/esa/storage/images/19716864-11-eng-GB/ESA_root_pillars.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'}  align={'flex-start'} spacing={8}>
          <Text
            
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '8xl' })}>
            FRAG STACK
          </Text>
          <Text
            color={'orange.400'}
            fontWeight={100}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '2xl', md: '5xl' })}>
            ENS + Fleak + Radical
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }} >
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;

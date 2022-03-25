import React, { ReactNode } from "react";
import { Container, Stack, Flex, Box, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";
import Blob from './Blob';

type HeroProps = {
  children?: ReactNode;
};

const Hero = ({ children }: HeroProps) => {
  return (
    
    <Container maxW={'7xl'} bgColor='gray.100' borderColor='gray.50' border='1px' boxShadow='dark-lg' rounded='lg'>
      
        <Stack
          align={'center'}
          spacing={ { base: 8, md: 10 } }
          py={ { base: 20, md: 28 } }
          direction={ { base: 'column', md: 'row' } }>
          <Stack flex={1} spacing={ { base: 5, md: 10 } }>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={ { base: '3xl', sm: '4xl', lg: '6xl' } }>
              <Text
                as={'span'}
                position={'relative'}
                _after={ {
                  content: "''",
                  width: 'full',
                  height: '20%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'cyan.400',
                  zIndex: -1,
                } }>
                FRAG Stack
              </Text>
              <br />
              <Text as={'span'} color={'cyan.400'}>
                ENS + Fleak + Radical 
              </Text>
            </Heading>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Blob
              w={'150%'}
              h={'150%'}
              position={'absolute'}
              top={'-20%'}
              left={0}
              zIndex={-1}
              color={useColorModeValue('cyan.50', 'cyan.400')}
            />
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://www.visitaruba.com/blog/wp-content/uploads/2017/04/Rock-Stacking-VisitAruba-1200x797.jpg'
                }
              />
            </Box>
          </Flex>
        </Stack>

    </Container>
    
  );
};

export default Hero;

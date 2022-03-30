import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  

  
  export default function SmallWithLogoLeft() {
    return (
      <Box m = "10em"
        bg="#143865"
        color={'white'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          
          <Text>© 2022 Decentralized website provided by Bankless Frag Stack Squad. All rights reserved.</Text>
          <Stack direction={'row'} spacing={6}>

          </Stack>
        </Container>
      </Box>
    );
  }
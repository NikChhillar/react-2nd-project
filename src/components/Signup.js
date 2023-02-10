import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
  Avatar,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>Welcome To Dark Web...</Heading>
          <Avatar boxSize={'32'} alignSelf="center" />
          <Input
            placeholder="Name..."
            type={'text'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder="Email..."
            type={'email'}
            required
            focusBorderColor={'purple.500'}
          />
          <Input
            placeholder="Password..."
            type={'password'}
            required
            focusBorderColor={'purple.500'}
          />

          <VStack alignItems="stretch">
            <Button m={'2'} p="2" colorScheme={'purple'} type="submit">
              Sign Up
            </Button>
            <Button
              m={'2'}
              outlineColor={'purple.500'}
              p="2"
              variant={'link'}
              colorScheme="purple"
            >
              <Link to="/login" letterSpacing="1px">
                Log In
              </Link>
            </Button>
          </VStack>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;

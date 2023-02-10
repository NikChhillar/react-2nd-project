import {
  Container,
  VStack,
  Heading,
  Input,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';

const Login = () => {
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
          <Heading>Welcome back...</Heading>
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

          <Button variant={'link'} alignSelf={'flex-end'}>
            <Link top={'/forgetpassword'}>Forgot Password..?</Link>
          </Button>

          <VStack alignItems="stretch">
            <Button m={'2'} p="2" colorScheme={'purple'} type="submit">
              Log In
            </Button>
            <Button
              m={'2'}
              outlineColor={'purple.500'}
              p="2"
              variant={'link'}
              colorScheme="purple"
            >
              <Link to="/signup" letterSpacing="1px">
                Sign Up
              </Link>
            </Button>
          </VStack>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;

import {
  Box,
  Stack,
  Heading,
  VStack,
  HStack,
  Button,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineShareAlt,
  AiOutlineYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Join us for updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Email here....."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineShareAlt size={'20'} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Dark Society
          </Heading>
          <Text>Live in darkness</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading
            textTransform={'uppercase'}
            size={'md'}
            mb="8"
            textAlign={'center'}
          >
            Dark Web
          </Heading>
          <HStack>
            <Button variant={'ghost'} colorScheme={'purple'}>
              <a target={'blank'} href="https://youtube.com">
                <AiOutlineYoutube size={'20'} />
              </a>
            </Button>
            <Button variant={'ghost'} colorScheme={'purple'}>
              <a target={'blank'} href="https://instagram.com">
                <AiFillInstagram size={'20'} />
              </a>
            </Button>
            <Button variant={'ghost'} colorScheme={'purple'}>
              <a target={'blank'} href="https://twitter.com">
                <AiFillTwitterCircle size={'20'} />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;

import { Stack, VStack, Heading, Text, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import v1 from '../videos/haikyuu.mp4';

const Amvs = () => {
  const amvArray = [v1, v1, v1, v1, v1];

  const [videoSrc, setVideoSrc] = useState(amvArray[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: '100%',
          }}
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Haikyuu... </Heading>
          <Text>High motivation here...</Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {amvArray.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            AMV {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Amvs;

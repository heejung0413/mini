import {Box, Button, Card, CardHeader, Text, Heading, CardBody, Stack, StackDivider} from '@chakra-ui/react';
import { useState} from 'react';
import {fetchBored} from '../api/index';


const BoredButton = () => {
  const [boredData, setBoredData] = useState();

  const handleButtonClick = async () => {
    const bored = await fetchBored({ participants: 1 });
    setBoredData(bored);
  };

  return(
    <Box >
      <Button bg="pink.100" p="10px" mb="10px" onClick={handleButtonClick}>button</Button>
      {boredData && (
        <Card w="320px" bg="pink.100">
          <CardHeader>
              <Heading size='md'>추천 항목</Heading>
              <Text pt="1em">{boredData.activity}</Text>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>
              <Heading size="md">인원 수</Heading>
              <Text>{boredData.participants}</Text>
            </Stack>
          </CardBody>
        </Card>
      )}
    
    </Box>
  );
}

export default BoredButton;

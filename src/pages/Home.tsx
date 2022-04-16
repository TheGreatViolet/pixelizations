import { Center, Stack, Title, Text, Group, TextInput, Button } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { checkKey } from '../functions/apiGetter';

const LimitReached: React.FC = () => {
  return (
    <>
      <Center>
        <Title>
          The API call limit has been reached <br />
          If you are seeing this, please report it to <br />
          Violet#0695 on Discord
        </Title>
      </Center>
    </>
  )
};

const Welcome: React.FC = () => {
  const [playerBoxVal, setPlayerBox] = React.useState('');

  return (
    <>
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Stack justify='center' align='center'>
          <Title>Pixelizations</Title>
          <Text size='xl'>
            Create data visualizations of your Hypixel stats.
          </Text>
          <Group position='center'>
            <TextInput placeholder='Player Name' value={playerBoxVal}
              onChange={(event) => setPlayerBox(event.currentTarget.value)} />
            <Button color='violet' component={Link} to={`/player/${playerBoxVal}`}>Get Started</Button>
          </Group>
        </Stack>
      </div>
    </>
  )
}

const Home: React.FC = () => {
  const [isLimited, setIfLimited] = React.useState(false);
  React.useEffect(() => {
    checkKey().then(isactive => {
      setIfLimited(isactive === 'good' ? false : true);
    });
  }, []);

  return (
    <>
      {isLimited ? <LimitReached /> : <Welcome />}
    </>
  )
}

export default Home;
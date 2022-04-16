import { AppShell, Button, Navbar, Stack, Text, Title } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router';
import { IoBed } from 'react-icons/io5';

interface PlayerProps {
  player: string;
}

const Bedwars: React.FC<PlayerProps> = ({ player }) => {
  return (
    <>
      {player}
    </>
  )
}

const Player: React.FC = () => {
  const { player } = useParams();
  const [activeSelection, setActiveSelection] = React.useState(<></>);

  return (
    <>
      <AppShell navbar={<Navbar width={{ base: 300 }} p='sm'>
        <Stack>
          <Title mb='md'>{player}</Title>
          <Button leftIcon={<IoBed />} size='lg' color='red'
            onClick={() => setActiveSelection(<Bedwars player={player ? player : ''} />)}>Bedwars</Button>
        </Stack>
      </Navbar>}>
        <Text>{activeSelection}</Text>
      </AppShell>
    </>
  )
}

export default Player;
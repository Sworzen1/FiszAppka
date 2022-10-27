import React from 'react';
import { Button, Center } from 'native-base';

export const ProfileScreen = ({
  navigation,
}: ProfileScreenProps): JSX.Element => {
  const { navigate } = navigation;

  return (
    <Center flex={1}>
      <Button colorScheme={'amber'} onPress={() => navigate('Login')}>
        Log out
      </Button>
    </Center>
  );
};

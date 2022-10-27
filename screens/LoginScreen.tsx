import React, { useCallback, useMemo, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Center, Icon, IconButton, Input, Text } from 'native-base';
import { Entypo } from '@expo/vector-icons';
import { ScrollView, StyleSheet } from 'react-native';

export const LoginScreen = ({
  navigation,
}: StackScreenProps<RootStackParams, 'Login'>): JSX.Element => {
  const { navigate } = navigation;
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

  const onLogin = useCallback((): void => {
    navigate('BottomTabNav', { screen: 'Flashcards' });
    setLogin('');
    setPassword('');
  }, []);

  const isLoginButtonDisabled = useMemo(
    (): boolean => login === '' || password === '',
    [login, password]
  );

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Center flex={1} p={4}>
        <Text color={'amber.500'} fontSize={'3xl'}>
          FiszAppka
        </Text>
        <Input
          _focus={style.focus}
          colorScheme={'amber'}
          mt={16}
          onChangeText={setLogin}
          placeholder={'Login'}
          size="xl"
          value={login}
        />
        <Input
          _focus={style.focus}
          colorScheme={'amber'}
          mt={4}
          InputRightElement={
            <IconButton
              colorScheme={'amber'}
              icon={
                isPasswordShown ? (
                  <Icon as={<Entypo name="eye" />} />
                ) : (
                  <Icon as={<Entypo name="eye-with-line" />} />
                )
              }
              onPress={() => setIsPasswordShown(!isPasswordShown)}
            />
          }
          onChangeText={setPassword}
          placeholder={'Password'}
          size="xl"
          type={isPasswordShown ? 'text' : 'password'}
          value={password}
        />
        {/* TODO Add function onLogin */}
        <Button
          colorScheme={'amber'}
          mt={4}
          width={'full'}
          isDisabled={isLoginButtonDisabled}
          onPress={onLogin}
        >
          Login
        </Button>
        {/* TODO What action will trigger when user forgot password ?? */}
        <Button
          mt={4}
          onPress={() => alert('Forgot password action')}
          variant="ghost"
          colorScheme={'amber'}
        >
          Forgot your password?
        </Button>
        <Center width={'full'} flexDirection={'row'} mt={16}>
          <Text>Dont have an accout?</Text>
          <Button
            colorScheme="amber"
            variant={'ghost'}
            onPress={() => navigate('Register')}
          >
            Sign up
          </Button>
        </Center>
      </Center>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: { flex: 1 },
  focus: { backgroundColor: 'amber.100', borderColor: 'amber.500' },
});

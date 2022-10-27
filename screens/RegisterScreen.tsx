import React, { useCallback, useMemo, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Button,
  Center,
  Checkbox,
  Icon,
  IconButton,
  Input,
  Text,
} from 'native-base';
import { Entypo } from '@expo/vector-icons';

export const RegisterScreen = ({
  navigation,
}: StackScreenProps<RootStackParams, 'Register'>): JSX.Element => {
  const { navigate } = navigation;
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const [areTermsAccepted, setAreTermsAccepted] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>('');

  const onRegister = useCallback((): void => {
    setLogin('');
    setPassword('');
    setNickname('');
    setAreTermsAccepted(!areTermsAccepted);
    alert('Register action');
  }, [areTermsAccepted]);

  const isRegisterButtonDisabled = useMemo(
    (): boolean =>
      !areTermsAccepted || login === '' || password === '' || nickname === '',
    [areTermsAccepted, login, password, nickname]
  );

  return (
    <ScrollView contentContainerStyle={style.container}>
      <Center flex={1} p={4}>
        <Text color={'amber.500'} fontSize={'3xl'}>
          Create your account
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
        <Input
          _focus={style.focus}
          colorScheme={'amber'}
          mt={4}
          onChangeText={setNickname}
          value={nickname}
          size="xl"
          placeholder={'Nickname'}
        />
        <Checkbox
          colorScheme={'amber'}
          mt={4}
          value={'areTermsAccepted'}
          isChecked={areTermsAccepted}
          onChange={() => {
            setAreTermsAccepted(!areTermsAccepted);
          }}
        >
          Accept ToDoApplication terms and policy
        </Checkbox>
        {/* TODO Add function onRegister */}
        <Button
          colorScheme="amber"
          width={'full'}
          mt={4}
          onPress={onRegister}
          isDisabled={isRegisterButtonDisabled}
        >
          Register
        </Button>
        {/* TODO Mayby implement login by social media */}
        <Center width={'full'} flexDirection={'row'} mt={16}>
          <Text>Have an accout?</Text>
          <Button
            colorScheme={'amber'}
            variant={'ghost'}
            onPress={() => navigate('Login')}
          >
            Log in
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

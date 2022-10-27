import React from 'react';
import { RootNavigation } from './navigation/RootNavigation';
import { NativeBaseProvider } from 'native-base';

export default function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <RootNavigation />
    </NativeBaseProvider>
  );
}

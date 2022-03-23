import React from 'react';
import {Image, StyleSheet, View, Text, ImageBackground} from 'react-native';
import CButton from './components/Button';
import {useCountContext} from './components/CountContextProvider';
import CountContextProvider from './components/CountContextProvider';
import Screen from './screen';

export default function App() {
  return (
    <CountContextProvider>
      <Screen />
    </CountContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  box2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },
  box3: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '30%',
  },
  t2: {
    color: 'white',
    fontSize: 50,
  },
  counter: {
    padding: 0,
    height: 75,
    color: 'white',
    fontSize: 25,
  },
});

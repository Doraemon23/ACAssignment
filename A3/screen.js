import React from 'react';
import {Image, StyleSheet, View, Text, ImageBackground} from 'react-native';
import CButton from './components/Button';
import {useCountContext} from './components/CountContextProvider';
import CountContextProvider from './components/CountContextProvider';


export default function Screen () {
    const countContext = useCountContext();
  const IncrementCount = () => {
    countContext.setCount(countContext.count+1);
  };

  const DecrementCount = () => {
    countContext.setCount(countContext.count-1);
  };
  const ResetCount = () => {
    countContext.setCount(0);
  };

    return (
        <View style={styles.container}>
        <ImageBackground
          style={styles.bg}
          source={require('./components/assets/bg.png')}>
          <Image source={require('./components/assets/fc.jpg')} />
          <Text style={styles.counter}>FULL</Text>
          <Text style={styles.counter}>COUNTER</Text>
          <Text style={styles.t2}>{countContext.count}</Text>
          <Text style={styles.t2}>{countContext.count}</Text>
          <View style={styles.box2}>
            <CButton color="#710193" title="+" action={IncrementCount} />
            <CButton color="#710193" title="-" action={DecrementCount} />
          </View>
          <View style={styles.box3}>
            <CButton color="#710193" title="Reset" action={ResetCount} />
          </View>
        </ImageBackground>
      </View>
    )
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
  
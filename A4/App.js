import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [AC, setAC] = useState(false);

  ShowActivity = () => {
    setAC(true);
    setModalVisible(!modalVisible);
    setTimeout(function () {
      setAC(false);
    }, 2000);
  };
  return (
    <View style={{backgroundColor: 'black', flex: 1, alignContent: 'center'}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{alignSelf: 'center', color: 'yellow', fontSize: 35}}>
          Total Month Spend:
        </Text>
        <Text style={{alignSelf: 'center', color: 'yellow', fontSize: 50}}>
          $ 1760
          <Text style={{fontSize:35}}>.58</Text>
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Modal animationType="slide" visible={modalVisible}>
          <View style={styles.mview}>
            <SafeAreaView style={styles.container}>
              {AC ? (
                <View style={styles.ACView}>
                  <ActivityIndicator size="large" />
                </View>
              ) : (
                <ScrollView contentContainerStyle={styles.cardview}>
                  <View style={{backgroundColor: 'blue', alignItems: 'center'}}>
                    <Image
                      style={styles.cc}
                      source={require('./assets/cards/cc.jpg')}
                    />
                  </View>
                  <View
                    style={{backgroundColor: 'yellow', alignItems: 'center'}}>
                    <Image
                      style={styles.cc}
                      source={require('./assets/cards/cc.jpg')}
                    />
                  </View>
                  <View style={{backgroundColor: 'red', alignItems: 'center'}}>
                    <Image
                      style={styles.cc}
                      source={require('./assets/cards/cc.jpg')}
                    />
                  </View>
                  <View
                    style={{
                      backgroundColor: 'lightgreen',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={styles.cc}
                      source={require('./assets/cards/cc.jpg')}
                    />
                  </View>
                  <View style={{backgroundColor: 'pink', alignItems: 'center'}}>
                    <Image
                      style={styles.cc}
                      source={require('./assets/cards/cc.jpg')}
                    />
                  </View>
                </ScrollView>
              )}
              <TouchableOpacity
                style={{
                  borderRadius: 15,
                  borderWidth: 2,
                  alignSelf: 'center',
                  padding: 10,
                  borderColor: 'green',
                  backgroundColor: 'black',
                }}
                onPress={() => {
                  ShowActivity();
                }}>
                <Text style={{color: 'green'}}>Close</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        </Modal>
        <TouchableOpacity
          style={{
            borderRadius: 15,
            borderWidth: 2,
            alignSelf: 'center',
            padding: 10,
            borderColor: 'green',
          }}
          onPress={() => {
            ShowActivity();
          }}>
          <Text style={styles.textStyle}>View Cards</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1,}}>
        <Text style={{fontSize: 40, color: 'white'}}>Upcoming Bills</Text>
        
        <Image
          style={styles.b}
          source={require('./assets/cards/dual.png')}
        />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  cardview: {
    backgroundColor: 'red',
  },
  b: {
    resizeMode:'contain',
    height: 200,
    width: 350,
    padding: 15,
  },
  money: {
    height: 20,
    fontSize: '42',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  cc: {
    resizeMode: 'stretch',
    height: 250,
    width: 350,
  },
  mview: {
    flex: 1,
    backgroundColor: 'white',
  },
  button: {
    borderWidth: 2,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    alignSelf: 'center',
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    fontSize: 40,
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  ACView: {
    backgroundcolor: 'transparent',
    justifyContent: 'center',
    height: 100,
  },
});

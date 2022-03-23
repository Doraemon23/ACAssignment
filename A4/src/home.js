import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={styles.container}>
  
            <Modal visible={modalOpen} animationType='slide'>
                <View style={styles.modalContent}>
                <MaterialIcons 
                    name='close'
                    size={24} 
                    style={{...styles.modalToggle, ...styles.modalClose}} 
                    onPress={() => setModalOpen(false)} 
                />
                    <SafeAreaView style={styles.container}>
                        <ScrollView style={styles.scrollView}>
                            <Text style={styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Text>
                        </ScrollView>
                    </SafeAreaView>
                 </View>
            </Modal>

            <MaterialIcons 
                name='add' 
                size={24} 
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)} 
            />


    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  }
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button, TextInput,SafeAreaView} from 'react-native';
import React, { useState } from 'react';
import { decrement, increment } from './features/counter/counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import  Counter from './features/counter/Counter'


export default function App() {
 
 

  return (
    <Provider store={store}>
   <Counter/>
    </Provider>
  );

}

const styles = StyleSheet.create({
  container: {
  
    
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 50
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
   
  },
});
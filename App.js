import 'react-native-gesture-handler'; /* react-native-gesture-handler import should be on top accoring to docs */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import StatusBar from './components/StatusBar';
import DeckList from './components/DeckList';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import Card from './components/Card';
import NewDeck from './components/NewDeck';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer styles={styles.container}>
      <StatusBar />

      <Stack.Navigator initialRouteName='DeckList'>
        <Stack.Screen
          name='DeckList'
          component={DeckList}
          options={{ title: 'Deck List Overview' }}
        />

        <Stack.Screen name='NewDeck'>
          {(props) => <NewDeck {...props} extraData={{}} />}
        </Stack.Screen>

        <Stack.Screen name='Deck'>
          {(props) => <Deck {...props} extraData={{}} />}
        </Stack.Screen>

        <Stack.Screen name='Quiz'>
          {(props) => <Quiz {...props} extraData={{}} />}
        </Stack.Screen>

        <Stack.Screen name='NewCard'>
          {(props) => <Card {...props} extraData={{}} />}
        </Stack.Screen>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import 'react-native-gesture-handler'; /* react-native-gesture-handler import should be on top accoring to docs */
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';

import StatusBar from './components/StatusBar';
import DeckList from './components/DeckList';
import Deck from './components/Deck';
import Quiz from './components/Quiz';
import NewCard from './components/NewCard';
import NewDeck from './components/NewDeck';
import appReduxStore from './store';

import API from './storage';

const Stack = createStackNavigator();

export default function App() {
  API.setInitialData();

  return (
    <Provider store={appReduxStore}>
      <NavigationContainer styles={styles.container}>
        <StatusBar />

        <Stack.Navigator initialRouteName='DeckList'>
          <Stack.Screen
            name='DeckList'
            component={DeckList}
            options={{ title: 'Decks' }}
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
            {(props) => <NewCard {...props} extraData={{}} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const DeckListItem = ({ item, navigation }) => {
  return (
    <TouchableHighlight onPress={() => navigation.navigate('Deck')}>
      <View style={styles.deckListItem}>
        <Text style={styles.itemFont}>{item.name}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  deckListItem: {
    flex: 1,
    fontSize: 20,
    height: 50,
    paddingHorizontal: 20,
    width: '100%',
    marginVertical: 10,
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  itemFont: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default DeckListItem;
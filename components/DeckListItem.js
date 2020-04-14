import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

const DeckListItem = ({ item, navigation }) => {
  return (
    <TouchableHighlight onPress={() => navigation.navigate('Deck',{
        deck: item
    })}>
      <View style={styles.deckListItem}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemFont}>{item.cards.length} Cards</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  deckListItem: {
    fontSize: 20,
    height: 80,
    paddingHorizontal: 20,
    margin:10,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:20,
    backgroundColor: 'beige',
    shadowOffset: {
      width: 7,
      height: 8
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation:4
  },
  itemFont: {
    textAlign: 'center',
    fontSize: 20,
  },
  itemTitle: {
    textAlign: 'center',
    fontSize:30
  }
});

export default DeckListItem;






import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { addDeckAsync } from '../actions';
import DeckListItem from './DeckListItem';

const DeckList = (props) => {
  return (
    <View style={styles.container}>
      <Button
        title='Create Deck'
        onPress={() => {
          //props.dispatch(addDeckAsync({ name: 'Combi', cards: [] }));

          props.navigation.navigate('NewDeck');
        }}
      />

      <FlatList
        data={props.decks}
        renderItem={(itemData) => (
          <DeckListItem {...props} item={itemData.item}></DeckListItem>
        )}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  decks: state.decks,
});

export default connect(mapStateToProps)(DeckList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

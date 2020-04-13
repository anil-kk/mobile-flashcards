import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { addDeckAsync } from '../actions';
import DeckListItem from './DeckListItem';

const DeckList = (props) => {
  return (
    <View style={styles.container}>
      <Text>DeckList, modal to add new deck</Text>
      <Button
        title='Test'
        onPress={() => {
          props.dispatch(addDeckAsync({ name: 'Combi', cards: [] }));
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
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

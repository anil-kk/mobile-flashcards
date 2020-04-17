import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { setLocalNotification, clearLocalNotification } from '../services';

const Score = (props) => {
  const { score, navigation, deck, reset } = props;

  clearLocalNotification().then(setLocalNotification());

  return (
    <View style={styles.score}>
      <Text style={{ fontSize: 15, alignSelf: 'center' }}>SCORE</Text>
      <Text
        style={{
          fontSize: 40,
          fontWeight: 'bold',
          alignSelf: 'center',
          color: 'red',
        }}
      >
        {score}
      </Text>

      <View style={styles.buttonGroup}>
        <Button
          title='Back To Deck'
          onPress={() => {
            reset()
            navigation.push('Deck', { deck })
          }}
        />
        <Button
          title='Restart Quiz'
          onPress={() => {
            reset()
            navigation.push('Quiz', { deck })
          }}
        />
      </View>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  score: {
    fontSize: 20,
    height: 200,
    paddingHorizontal: 20,
    margin: 20,
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'beige',
    shadowOffset: {
      width: 7,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  }
});

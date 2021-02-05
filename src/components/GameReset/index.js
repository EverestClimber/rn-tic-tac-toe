import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const GameReset = ({ onClick }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity testID="game-reset" onPress={onClick} style={buttonStyle}>
      <Text style={textStyle}>Restart Game</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginBottom: 30
  },
  textStyle: {
    padding: 20,
    color: 'white',
  }
});

export default GameReset;

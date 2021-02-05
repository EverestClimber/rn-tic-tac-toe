import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const GameStatus = ({ player, gameStatus }) => {
  const { statusStyle, textStyle } = styles;

  const renderStatus = () => {
    if (gameStatus === 0) {
      return `Next Player: ${player}`;
    }
    else if (gameStatus === 1) {
      return `Winner: ${player}`;
    }
    else if (gameStatus === 2) {
      return `Ended in a draw`;
    } else {
      return '';
    }
  };

  return (
    <View style={statusStyle}>
      <Text style={textStyle}>
        {renderStatus()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  statusStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  textStyle: {
    fontSize: 20
  }
});

export default GameStatus;

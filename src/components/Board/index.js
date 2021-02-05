import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Square from '../Square';

const Board = ({ gridValues = [], onClick }) => {
  const { rowStyle, boardStyle } = styles;

  return (
    <View testID="board" style={boardStyle}>
      {gridValues.map((rowItems, rowIndex) => (
        <View key={rowIndex} style={rowStyle}>
          {rowItems.map((value, itemIndex) => (
            <Square
              key={rowIndex * 3 + itemIndex}
              value={value}
              onClick={onClick(rowIndex * 3 + itemIndex)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  boardStyle: {
    alignItems: 'center',
    marginBottom: 30
  },
  rowStyle: {
    flexDirection: 'row'
  },
});

export default Board;

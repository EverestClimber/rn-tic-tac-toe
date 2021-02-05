import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Square = ({ value, onClick }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      onPress={onClick}
      // title={value}
      style={buttonStyle}
    >
      <Text style={textStyle}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: (windowWidth - 100) / 3,
    height: (windowWidth - 100) / 3,
    margin: 1,
    borderColor: 'black',
    borderWidth: 1,
  },
  textStyle: {
    fontSize: 50
  }
});

export default Square;

import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';

const Header = ({ text }) => {
  const { headerStyle } = styles;

  return (
    <Text style={headerStyle}>{text}</Text>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    marginBottom: 30
  }
});

export default Header;

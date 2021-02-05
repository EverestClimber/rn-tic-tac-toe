import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

const Container = ({ children }) => {
  const { containerStyle } = styles;

  return (
    <View testID="conatiner" style={containerStyle}>{children}</View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  }
});

export default Container;

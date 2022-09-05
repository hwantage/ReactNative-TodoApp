import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomText = props => {
  return (
    <Text {...props} style={[styles.defaultFont, props.style]}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultFont: {
    fontFamily: 'sans-serif-thin',
    fontWeight: '800',
    fontSize: 40,
    color: 'red',
  },
});

export default CustomText;

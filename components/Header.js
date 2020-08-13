import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 45,
    padding: 15,
    backgroundColor: 'darkslateblue',
    justifyContent: 'center',
  },

  text: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Header;

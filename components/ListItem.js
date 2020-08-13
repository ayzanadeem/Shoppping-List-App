import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ListItem = ({ item, deleteItem }) => {
  return (
    <TouchableOpacity
      onPress={() => deleteItem(item.id)}
      style={styles.ListItem}>
      <View style={styles.ListItemView}>
        <Text style={styles.ItemText}> {item.text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ListItem: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',

  },

  ListItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  ItemText: {
    fontSize: 15,
  },
});

export default ListItem;

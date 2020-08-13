import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItem] = useState([
    { id: Math.random(), text: 'Milk' },
    { id: Math.random(), text: 'Bread' },
    { id: Math.random(), text: 'Eggs' },
  ]);

  const deleteItem = (id) => {
    setItem((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (itemName) => {
    //alert('test');
    setItem([...items, { id: Math.random(), text: itemName }]);
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={items}
        extraData={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

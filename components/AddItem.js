import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');

  const onChange = (newText) => setText(newText);

  return (
    <View>
      <TextInput
        placeholder="Add an Item"
        style={styles.input}
        onChangeText={onChange}
      />

      <TouchableOpacity styles={styles.button} onPress={() => addItem(text)}>
        <Text style={styles.btnText}> Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },

  button: {
    backgroundColor: 'darkslateblue',
    padding: 9,
    margin: 5,
  },

  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;

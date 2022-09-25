import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginRight: 10,
  },
});

interface Props {
  onAddTodo: (text: string) => void;
}

const TodoInsert = ({onAddTodo}: Props) => {
  const [inputText, setInputText] = useState<string>('');

  const addTodoHandler = () => {
    onAddTodo(inputText);
    setInputText('');
  };

  const todoInputHandler = (newText: string) => {
    setInputText(newText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="할일을 입력해 주세요."
        placeholderTextColor={'#999'}
        autoCorrect={false}
        onChangeText={todoInputHandler}
        onSubmitEditing={addTodoHandler}
        value={inputText}
      />
      <View style={styles.button}>
        <Button title="추가" onPress={addTodoHandler} />
      </View>
    </View>
  );
};

export default TodoInsert;

import React from 'react';
import {StyleSheet, View, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {default as Text} from './components/CustomText';

const styles = StyleSheet.create({
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  listContainer: {
    alignItems: 'center',
  },
  itemcontainer: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

interface Todo {
  id: string;
  textValue: string;
  checked: boolean;
}

interface Props {
  todos: Todo[];
  onRemove: (id: string) => void;
  onToggle: (id: string) => void;
}

const TodoList = ({todos, onRemove, onToggle}: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {todos.map((todo: Todo) => (
        <View style={styles.itemcontainer} key={todo.id}>
          <TouchableOpacity onPressOut={() => onToggle(todo.id)}>
            <View style={styles.completeCircle}>
              {todo.checked ? (
                <View style={styles.completeCircle}>
                  <Icon name="circledowno" size={30} color="#3143e8" />
                </View>
              ) : (
                <View style={styles.circle} />
              )}
            </View>
          </TouchableOpacity>
          <Text style={[styles.text, todo.checked && styles.strikeText]}>
            {todo.textValue}
          </Text>
          <TouchableOpacity style={styles.buttonContainer}>
            <Text onPress={() => onRemove(todo.id)}>
              <Icon name="delete" size={30} color="#e33057" />
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default TodoList;

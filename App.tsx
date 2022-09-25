import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {default as Text} from './components/CustomText';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

interface Todo {
  id: string;
  textValue: string;
  checked: boolean;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = (id: string) => {
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
  };

  const onToggle = (id: string) => {
    setTodos(
      todos.map((todo: Todo) =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>Simple to do app</Text>
      <View style={styles.card}>
        {/* TodoInsert */}
        <TodoInsert onAddTodo={addTodo} />
        {/* TodoList */}
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
    </SafeAreaView>
  );
};

export default App;

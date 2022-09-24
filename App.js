import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {default as Text} from './components/CustomText';
import {useIntl} from 'react-native-international';
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

const App = () => {
  const [todos, setTodos] = useState([]);
  const {t, locale, getLanguages, changeLocale} = useIntl();

  console.log(locale);
  console.log(getLanguages());
  changeLocale('ko');

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.appTitle}>{t('title')}</Text>
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

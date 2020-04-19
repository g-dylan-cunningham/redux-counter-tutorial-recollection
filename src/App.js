import React from 'react';
import Footer from './components/Footer';
import Todo from './components/Todo';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoInput />
      {/* <Todo />
      <TodoList /> */}
      <Footer /> 
    </div>
  );
}

export default App;

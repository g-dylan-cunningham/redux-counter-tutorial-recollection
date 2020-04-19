import React from 'react';
import Footer from './components/Footer';
import Todo from './components/Todo';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

const mockTodos = [
  {
      id: 0,
      text: "test 1",
      isComplete: false,
  },
  {
      id: 1,
      text: "test 2",
      isComplete: true,
  },
  {
      id: 2,
      text: "test 2",
      isComplete: false,
  },
]

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList todos={mockTodos} />
      <Footer /> 
    </div>
  );
}

export default App;

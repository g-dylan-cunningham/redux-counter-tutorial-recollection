import React from 'react';
import { store } from './redux';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import TodoInput from './components/TodoInput';
import VisibleTodoList from './containers/VisibleTodoList';
import { addTodo } from './redux/actions';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoInput addTodo={addTodo} />
        <VisibleTodoList />
        <Footer /> 
      </Provider>
    </div>
  );
}

export default App;

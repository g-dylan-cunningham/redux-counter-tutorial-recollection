import React from 'react';
import { store } from './redux';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import TodoInput from './components/TodoInput';
import VisibleTodoList from './containers/VisibleTodoList';

function App() {
  console.log("store", store.getState())
  return (
    <div className="App">
      <Provider store={store}>
        <TodoInput />
        <VisibleTodoList />
        <Footer /> 
      </Provider>
    </div>
  );
}

export default App;

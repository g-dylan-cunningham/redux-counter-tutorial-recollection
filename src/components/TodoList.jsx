import React, { Fragment } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo }) => {
    return (
        <Fragment>
            <ul>
                {
                    todos.map(todo => {
                        return (
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                text={todo.text}
                                isComplete={todo.isComplete}
                                clickHandler={toggleTodo}
                            />
                        )
                    })
                }
            </ul>
            
        </Fragment>
    );
}

export default TodoList;
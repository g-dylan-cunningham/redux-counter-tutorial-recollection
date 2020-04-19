import React, { Fragment } from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
    return (
        <Fragment>
            <ul>
                {
                    todos.map(todo => {
                        return (
                            <Todo
                                key={todo.id}
                                text={todo.text}
                                isComplete={todo.isComplete}
                            />
                        )
                    })
                }
            </ul>
            
        </Fragment>
    );
}

export default TodoList;
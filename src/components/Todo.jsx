import React from 'react';

const Todo = ({ isComplete, text, id, clickHandler }) => {
    return (
        <li
            onClick={() => clickHandler(id)}
            style={{
                'textDecoration': 
                    isComplete 
                        ? 'line-through' 
                        : ''
            }}
        >
            {text}
        </li>
    );
}

export default Todo;
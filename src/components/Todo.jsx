import React from 'react';

const Todo = ({ isComplete, text }) => {
    return (
        <li
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
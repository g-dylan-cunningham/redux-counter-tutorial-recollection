import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState('');
    return (
        <div>
            <input
                type='text'
                placeholder='your next todo'
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <input  
                type='submit'
                value='add'
                onClick={addTodo}
            />
        </div>
    );
}

export default TodoInput;

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoInput = ({ boundAddTodo }) => {
    const [text, setText] = useState('');

    const handleClick = (e) => {
        e.preventDefault();
        boundAddTodo(text);
    }
    
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
                onClick={e => handleClick(e)}
            />
        </div>
    );
}

const mapDispatchToProps = dispatch => {

    return {
        boundAddTodo: (text) => dispatch(addTodo(text)),
    }
}

export default connect(null, mapDispatchToProps)(TodoInput);

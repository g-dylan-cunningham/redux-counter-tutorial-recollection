import { createStore } from 'redux';
import { uuid } from 'uuidv4';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions';

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

const initialState = {
    todos: mockTodos,
}

const app = (state = initialState, action) => {
    console.log("action at reducer", action)
    switch (action.type) {

        case TOGGLE_TODO:

            return {
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id !== action.id) {
                        return todo;
                    } else {
                        return {
                            ...todo,
                            isComplete: !todo.isComplete
                        }
                    }
                })
                
            }
        
        case ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: uuid(),
                        text: action.text,
                        isComplete: false,
                    }
                ]
            }

        default:
        return state;
    }
};

export const store = createStore(app);

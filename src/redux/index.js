import { createStore } from 'redux';
import { uuid } from 'uuidv4';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions';

const initialState = {
    activeFilter: 'all',
    todos: [],
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

        case SET_VISIBILITY_FILTER:
            return {
                ...state,
                activeFilter: action.selectedFilter
            }

        default:
        return state;
    }
};

export const store = createStore(app);

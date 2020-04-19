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
    switch (action.type) {

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

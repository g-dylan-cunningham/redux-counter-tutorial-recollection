import { createStore } from 'redux';

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
        default:
        return state;
    }
};

export const store = createStore(app);

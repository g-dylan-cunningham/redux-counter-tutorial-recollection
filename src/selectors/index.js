import { createSelector } from 'reselect';

const getVisibilityFilter = state => state.activeFilter;
const getAllTodos = state => state.todos;

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getAllTodos],
    (activeFilter, todos) => {
        switch (activeFilter) {
            case 'active':
                return todos.filter(todo => !todo.isComplete);
                
            case 'completed':
                return todos.filter(todo => todo.isComplete);
                
            case 'all':
            default:
                return todos;
        }
    }
);
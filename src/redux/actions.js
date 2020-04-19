// actions
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

// action creators
export const addTodo = (text) => ({
    type: ADD_TODO,
    text,
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id,
});

export const SetVisibilityFilter = (selectedFilter) => ({
    type: SET_VISIBILITY_FILTER,
    selectedFilter,
});

const ADD_TODO = 'ADD_TODO';
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    newTodo: newTodo
  }
};

const TOGGLE_TODO = 'TOGGLE_TODO';
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    id: id
  }
};
/* @flow */

const ADD_TODO: string = 'ADD_TODO';
export const addTodo = (newTodo: Todo): Object => {
  return {
    type: ADD_TODO,
    newTodo: newTodo
  }
};

const TOGGLE_TODO: string = 'TOGGLE_TODO';
export const toggleTodo = (id: number): Object => {
  return {
    type: TOGGLE_TODO,
    id: id
  }
};
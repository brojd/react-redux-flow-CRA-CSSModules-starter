import { createSelector } from 'reselect';

const allTodos = state => state.todos;
const currentFilter = state => state.todosFilter;
const filterTodos = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos;
    case 'COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'ACTIVE':
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

export const getFilteredTodos = createSelector(
  allTodos,
  currentFilter,
  filterTodos
);

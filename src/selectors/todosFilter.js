import { createSelector } from 'reselect';

const currentFilterSelector = state => state.todosFilter;
export const getCurrentFilter = createSelector(
    currentFilterSelector,
    currentFilter => currentFilter
);

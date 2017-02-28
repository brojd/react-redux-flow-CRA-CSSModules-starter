/* @flow */

const SET_FILTER: string = 'SET_FILTER';
export const setFilter = (filter: string): Object => {
  return {
    type: 'SET_FILTER',
    filter: filter
  }
};
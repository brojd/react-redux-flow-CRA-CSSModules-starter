/* @flow */

const initialState = 'ACTIVE';

const todosFilter = (state: string = initialState, action: Object): string => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default todosFilter;
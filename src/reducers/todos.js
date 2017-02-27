const initialState = [
  { id: 0, name: '1st task', completed: false },
  { id: 1, name: '2nd task', completed: false }
];

let nextId = 2;

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, Object.assign({ ...action.newTodo, id: nextId++ }) ];
    case 'TOGGLE_TODO':
      return state.map(todo => todo.id !== action.id ? todo : Object.assign({ ...todo, completed: !todo.completed }));
    default:
      return state;
  }
};

export default todos;

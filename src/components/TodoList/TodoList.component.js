import React, { PropTypes } from 'react';
import styles from './TodoList.stylesheet.css';

const TodoList = ({ todos, onTodoClick, currentFilter }) => {
  
  const handleTodoClick = (id) => {
    onTodoClick(id);
  };
  
  return (
    <ul className={styles.TodoList}>
      <h2 className={styles.currentFilter}>{currentFilter}</h2>
      {todos.map((todo, index) => (
        <li key={index}
            onClick={() => handleTodoClick(todo.id)}
            className={styles.todo}>
          {index + 1}. {todo.name}
        </li>
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  onTodoClick: PropTypes.func,
  currentFilter: PropTypes.string
};

export default TodoList;

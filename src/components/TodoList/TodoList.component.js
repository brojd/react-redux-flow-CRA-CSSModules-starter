/* @flow */

import React from 'react';
import styles from './TodoList.stylesheet.css';

type Props = {
  todos: Todos,
  onTodoClick: (id: number) => void,
  currentFilter: string
}

const TodoList = ({ todos, onTodoClick, currentFilter }: Props) => {
  
  const handleTodoClick = (id: number): void => {
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

export default TodoList;

/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/todos';
import { setFilter } from '../actions/todosFilter';
import { getCurrentFilter } from '../selectors/todosFilter.js';
import { getFilteredTodos } from '../selectors/todos.js';
import AddTodoName from '../components/AddTodo/AddTodo.component';
import TodoList from '../components/TodoList/TodoList.component';
import FilterTodos from '../components/FilterTodos/FilterTodos.component';

type Props = {
  todos: Todos,
  currentFilter: string,
  addTodo: (newTodo: Todo) => { type: string, newTodo: Todo },
  toggleTodo: (id: number) => { type: string, id: number },
  setFilter: (filter: string) => { type: string, filter: string }
}

class TodoListContainer extends Component {

  props: Props;

  handleSubmit: Function;
  handleFilterChosen: Function;
  handleTodoClick: Function;
  
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilterChosen = this.handleFilterChosen.bind(this);
    this.handleTodoClick = this.handleTodoClick.bind(this);
  }
  
  handleSubmit(name: string): void {
    this.props.addTodo({ id: 0, name: name, completed: false });
  }
  
  handleFilterChosen(filter: string): void {
    this.props.setFilter(filter);
  }
  
  handleTodoClick(id: number): void {
    this.props.toggleTodo(id);
  }
  
  render() {
    const filters = ['ALL', 'COMPLETED', 'ACTIVE'];
    return (
      <div>
        <AddTodoName onSubmit={this.handleSubmit} />
        <TodoList currentFilter={this.props.currentFilter}
                  todos={this.props.todos}
                  onTodoClick={this.handleTodoClick}/>
        <FilterTodos filters={filters}
                     onFilterChosen={this.handleFilterChosen} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getFilteredTodos(state),
    currentFilter: getCurrentFilter(state)
  }
};

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
  setFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);

/* @flow */

import React, { Component, PropTypes } from 'react';
import styles from './AddTodo.stylesheet.css';

type Props = {
  onSubmit: () => void;
}

class AddTodo extends Component {

  props: Props;

  state: {
    todoName: string
  };

  handleChange: () => void;
  handleSubmit: () => void;
  
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      todoName: ''
    };
  }
  
  handleChange(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.setState({ todoName: event.target.value });
    }
  };
  
  handleSubmit(event: Event): void {
    event.preventDefault();
    this.props.onSubmit(this.state.todoName);
    this.setState({ todoName: '' });
  };
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.AddTodo}>
        <input type="text"
               onChange={this.handleChange}
               value={this.state.todoName}
               name="name"
               className={styles.nameInput}
               placeholder="Enter name..." />
        <button type="submit" className={styles.submitButton}>Add task</button>
      </form>
    );
  }
}

export default AddTodo;

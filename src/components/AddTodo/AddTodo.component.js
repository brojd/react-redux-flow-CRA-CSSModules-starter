import React, { Component, PropTypes } from 'react';
import styles from './AddTodo.stylesheet.css';

class AddTodo extends Component {
  
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      todoName: ''
    };
  }
  
  handleChange(event) {
    this.setState({ todoName: event.target.value });
  };
  
  handleSubmit(event) {
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

AddTodo.propTypes = {
  onSubmit: PropTypes.func
};

export default AddTodo;

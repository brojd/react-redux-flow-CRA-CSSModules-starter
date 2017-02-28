/* @flow */

import React, { Component } from 'react';
import styles from './FilterTodos.stylesheet.css';
import classNames from 'classnames';

type Props = {
  filters: Array<string>,
  onFilterChosen: (filter: string) => void
}

class FilterTodos extends Component {

  props: Props;

  state: {
    currentFilterIndex: number
  };
  
  constructor() {
    super();
    this.handleFilterChosen = this.handleFilterChosen.bind(this);
    this.state = {
      currentFilterIndex: 2
    };
  }
  
  handleFilterChosen = (filter: string, index: number): void => {
    this.props.onFilterChosen(filter);
    this.setState({ currentFilterIndex: index });
  };
  
  render() {
    return (
      <ul className={styles.FilterTodos}>
        {this.props.filters.map((filter, index) => (
          <button key={index}
                  onClick={() => this.handleFilterChosen(filter, index)}
                  className={classNames(
                    styles.filterButton,
                    { [styles.activeButton]: index===this.state.currentFilterIndex }
                  )}
                  >
            {filter}
          </button>
        ))}
      </ul>
    )
  };
}

export default FilterTodos;

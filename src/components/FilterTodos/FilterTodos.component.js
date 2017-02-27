import React, { PropTypes, Component } from 'react';
import styles from './FilterTodos.stylesheet.css';
import classNames from 'classnames';

class FilterTodos extends Component {
  
  constructor() {
    super();
    this.handleFilterChosen = this.handleFilterChosen.bind(this);
    this.state = {
      currentFilterIndex: 2
    };
  }
  
  handleFilterChosen = (filter, index) => {
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

FilterTodos.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string),
  onFilterChosen: PropTypes.func
};

export default FilterTodos;

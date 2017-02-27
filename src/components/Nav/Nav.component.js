import React from 'react';
import { IndexLink, Link } from 'react-router';
import styles from './Nav.stylesheet.css';

const Nav = () =>
  <nav className={styles.Nav}>
    <IndexLink to={'/'} className={styles.link} activeClassName={styles.activeLink}>TodoApp</IndexLink>
    <Link to={'/about'} className={styles.link} activeClassName={styles.activeLink}>About</Link>
  </nav>;

export default Nav;

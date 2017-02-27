import React from 'react';
import styles from './Header.stylesheet.css';
import logos from './images';

const Header = () =>
  <header className={styles.Header}>
    <h1 className={styles.heading}>react-redux-CRA-CSSModules-starter</h1>
    <section className={styles.logoSection}>
      {logos.map((logo, index) => <img key={index} src={logo} alt="logo_img" className={styles.logoImg} />)}
    </section>
  </header>;

export default Header;

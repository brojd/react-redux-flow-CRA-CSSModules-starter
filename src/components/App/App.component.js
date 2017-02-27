import React from 'react';
import styles from './App.stylesheet.css';
import Header from '../Header/Header.component';
import Nav from '../Nav/Nav.component';
import Footer from '../Footer/Footer.component';

const App = ({ children }) =>
  <section className={styles.App}>
    <Header />
    <Nav />
    <main className={styles.main}>
      {children}
    </main>
    <Footer />
  </section>;

export default App;

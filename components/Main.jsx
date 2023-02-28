import React from 'react';
import AboutMe from '../components/AboutMe';
import Archiving from '../components/Archiving';
import Career from '../components/Career';
import Footer from '../components/Footer';
import Introduce from '../components/Introduce';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import useMoveScroll from '../hooks/useMoveScroll';
import styles from '../styles/Main.module.css';

export default function Main() {
  const goodsTabs = {
    0: useMoveScroll('About me'),
    1: useMoveScroll('Skills'),
    2: useMoveScroll('Archiving'),
    3: useMoveScroll('Projects'),
    4: useMoveScroll('Career'),
    length: 5,
  };
  return (
    <div className={styles.container}>
      <Navbar goodsTabs={goodsTabs} />
      <Introduce />
      <AboutMe elementRef={goodsTabs[0].element} />
      <Skills elementRef={goodsTabs[1].element} />
      <Archiving elementRef={goodsTabs[2].element} />
      <Projects elementRef={goodsTabs[3].element} />
      <Career elementRef={goodsTabs[4].element} />
      <Footer />
    </div>
  );
}

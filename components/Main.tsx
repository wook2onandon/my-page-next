import AboutMe from './AboutMe';
import Archiving from './Archiving';
import Career from './Career';
import Footer from './Footer';
import Introduce from './Introduce';
import Navbar from './Navbar';
import Projects from './Projects';
import Skills from './Skills';
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

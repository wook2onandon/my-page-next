import React from 'react';
import { skillsInfo } from '../assets/projectData';
import Title from './Title';
import styles from '../styles/Skills.module.css';
import Image from 'next/image';

export default function Skills({ elementRef }: any) {
  return (
    <article className={styles.section}>
      <div className={styles.container} ref={elementRef}>
        <Title font="SKILLS" lineColor="#000" color="#000" />
        <div className={styles.listContainer}>
          {skillsInfo.map((skill, index) => {
            return (
              <div className={styles.listWrap} key={index}>
                <div className={styles.listTitle}>{skill.title}</div>
                <Image
                  src={skill.src}
                  alt={skill.title}
                  fill
                  className={styles.listImg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

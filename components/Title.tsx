import React from 'react';
import styles from '../styles/Title.module.css';

type titleType = {
  font: string;
  color: string;
  lineColor: string;
};

export default function Title({ font, lineColor, color }: titleType) {
  return (
    <div className={styles.container}>
      <div
        className={styles.text}
        style={{ color: color, borderBottomColor: lineColor }}
      >
        {font}
      </div>
    </div>
  );
}

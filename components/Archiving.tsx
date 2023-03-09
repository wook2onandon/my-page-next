import Title from './Title';
import styles from '../styles/Archiving.module.css';
import Image from 'next/image';

export default function Archiving({ elementRef }: any) {
  return (
    <article ref={elementRef} className={styles.container}>
      <div className={styles.wrap}>
        <Title font="ARCHIVING" lineColor="#6c757d" color="#fff" />
        <div className={styles.listWrap}>
          <a
            className={styles.itemWrap}
            href="https://www.github.com/wook2onandon"
          >
            <div className={styles.nameWrap}>
              <Image
                src="/images/github.png"
                alt="logo"
                width={160}
                height={90}
              />
            </div>
            <div className={styles.address}>github.com/wook2onandon</div>
            <div className={styles.textTitle}>
              <b>소스 코드 저장소</b>입니다.
            </div>
            <ul className={styles.textWrap}>
              <li className={styles.text}>
                과거 프로젝트, 프로그램, 앱의 소스 코드
              </li>
              <li className={styles.text}>
                혼자서 코딩 연습을 위해 끄적이던 소스 코드
              </li>
            </ul>
          </a>
          <a
            className={styles.itemWrap}
            href="https://wook2onandon.notion.site/WOOK-s-Portfolio-a465e17624d141378fdc4b8effba7d78"
          >
            <div className={styles.nameWrap}>
              <Image
                src="/images/notion.png"
                alt="logo"
                width={160}
                height={90}
              />
            </div>
            <div className={styles.address}>
              https://wook2onandon.notion.site/WOOK-s-Portfolio-a465e17624d141378fdc4b8effba7d78
            </div>
            <div className={styles.textTitle}>
              <b>WOOK&rsquo;s Portfolio 노션</b>입니다.
            </div>
            <ul className={styles.textWrap}>
              <li className={styles.text}>
                자기소개와 Portfolio가 정리되어있습니다.
              </li>
              <li className={styles.text}>
                기술개발서와 기술스택이 정리되어있습니다.
              </li>
            </ul>
          </a>
        </div>
      </div>
    </article>
  );
}

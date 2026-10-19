import { useState } from 'react';

import editorialImage from '../../assets/they-use-corello.png';
import editorialImageTwo from '../../assets/they-use-corello-2.png';
import spriteUrl from '../../assets/sprite.svg';

import styles from './TheyUseCorello.module.css';

const editorialImages = [
  {
    src: editorialImage,
    alt: 'Look Corello com scarpin vermelho',
  },
  {
    src: editorialImageTwo,
    alt: 'Look Corello em uma produção editorial',
  },
];

function Icon({ id }: { id: string }) {
  return (
    <svg className={styles.icon} aria-hidden="true">
      <use href={`${spriteUrl}#${id}`} />
    </svg>
  );
}

export default function TheyUseCorello() {
  const [activeSlide, setActiveSlide] = useState(0);

  const moveSlide = (direction: -1 | 1) => {
    setActiveSlide((current) => (current + direction + editorialImages.length) % editorialImages.length);
  };

  return (
    <section className={styles.section} aria-labelledby="elas-usam-title">
      <div className={styles.heading}>
        <h2 id="elas-usam-title">ELAS USAM CORELLO</h2>
        <p>
          Os modelos queridinhos das nossas
          <br />
          redes sociais estão aqui.
          <br />
          @CorelloOficial
        </p>
      </div>

      <div className={styles.carousel}>
        <button
          className={`${styles.arrow} ${styles.previous}`}
          type="button"
          aria-label="Imagem anterior"
          onClick={() => moveSlide(-1)}
        >
          <Icon id="left-arrow" />
        </button>
        <div className={styles.imageFrame}>
          <img src={editorialImages[activeSlide].src} alt={editorialImages[activeSlide].alt} />
          <span className={styles.instagramMark}>
            <Icon id="alt-camera-icon" />
          </span>
          <button className={styles.more} type="button" aria-label="Abrir publicação">
            <Icon id="plus-icon" />
          </button>
        </div>
        <button
          className={`${styles.arrow} ${styles.next}`}
          type="button"
          aria-label="Próxima imagem"
          onClick={() => moveSlide(1)}
        >
          <Icon id="right-arrow" />
        </button>
      </div>

      <div className={styles.progress} aria-hidden="true">
        <span style={{ width: `${100 / editorialImages.length}%`, left: `${activeSlide * 50}%` }} />
      </div>
    </section>
  );
}

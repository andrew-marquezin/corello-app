import { useState } from 'react';

import heroImage from '../../assets/hero.png';
import spriteUrl from '../../assets/sprite.svg';

import styles from './Hero.module.css';

const SLIDE_COUNT = 5;

function Icon({ id }: { id: string }) {
  return (
    <svg className="icon" aria-hidden="true">
      <use href={`${spriteUrl}#${id}`} />
    </svg>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);

  const goTo = (next: number) => {
    setIndex((next + SLIDE_COUNT) % SLIDE_COUNT);
  };

  return (
    <section className={styles.hero} aria-roledescription="carousel" aria-label="Destaques">
      <img src={heroImage} alt="Botas de camurça marrom" />

      <button
        type="button"
        className={`${styles.arrow} ${styles.prev}`}
        aria-label="Banner anterior"
        onClick={() => goTo(index - 1)}
      >
        <Icon id="left-arrow" />
      </button>

      <div className={styles.copy}>
        <p className={styles.kicker}>AQUI VOCÊ ENCONTRA O MATCH PERFEITO COM A BOTA IDEAL.</p>
        <p className={styles.title}>BOTAS PARA TODAS AS HORAS</p>
      </div>

      <button
        type="button"
        className={`${styles.arrow} ${styles.next}`}
        aria-label="Próximo banner"
        onClick={() => goTo(index + 1)}
      >
        <Icon id="right-arrow" />
      </button>

      <div className={styles.dots} role="tablist" aria-label="Banners">
        {Array.from({ length: SLIDE_COUNT }, (_, slide) => (
          <button
            key={slide}
            type="button"
            role="tab"
            aria-label={`Banner ${slide + 1}`}
            aria-selected={slide === index}
            className={slide === index ? `${styles.dot} ${styles.dotActive}` : styles.dot}
            onClick={() => setIndex(slide)}
          />
        ))}
      </div>
    </section>
  );
}

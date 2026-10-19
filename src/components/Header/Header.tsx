import Logo from '../../assets/corelloLogo.svg?react';
import spriteUrl from '../../assets/sprite.svg';

import styles from './Header.module.css';

function Icon({ id }: { id: string }) {
  return (
    <svg className="icon" aria-hidden="true">
      <use href={`${spriteUrl}#${id}`} />
    </svg>
  );
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <span className={styles.bannerIcon} aria-hidden="true">
          <Icon id="truck-icon" />
        </span>
        <div className={styles.bannerText}>
          <p className={styles.bannerLabel}>frete expresso</p>
          <p className={styles.bannerMessage}>
            Compre e receba seu pedido{' '}
            <span className={styles.highlight}>em até 24h</span>
          </p>
        </div>
      </div>

      <nav className={styles.nav} aria-label="Principal">
        <div className={styles.cluster}>
          <button type="button" className={styles.iconButton} aria-label="Menu">
            <Icon id="menu-icon" />
          </button>
          <button type="button" className={styles.iconButton} aria-label="Buscar">
            <Icon id="search-icon" />
          </button>
        </div>

        <a href="/" className={styles.logo} aria-label="Corello, página inicial">
          <Logo />
        </a>

        <div className={`${styles.cluster} ${styles.clusterEnd}`}>
          <button type="button" className={styles.iconButton} aria-label="Busca visual">
            <Icon id="camera-icon" />
          </button>
          <a href="/" className={styles.iconButton} aria-label="Favoritos">
            <Icon id="favorite-icon" />
          </a>
          <button type="button" className={styles.iconButton} aria-label="Sacola">
            <Icon id="bag-icon" />
          </button>
        </div>
      </nav>
    </header>
  );
}

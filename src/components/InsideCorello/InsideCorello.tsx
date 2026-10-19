import articleImage from '../../assets/inside-corello.png';
import articleImageTwo from '../../assets/inside-corello-2.png';
import insideLogo from '../../assets/inside.svg';
import spriteUrl from '../../assets/sprite.svg';

import styles from './InsideCorello.module.css';

const articles = [
  {
    title: 'Lorem Ipsum',
    date: '20 / jan',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: articleImage,
    inverted: false,
  },
  {
    title: 'Lorem Ipsum',
    date: '20 / jan',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    image: articleImageTwo,
    inverted: true,
  },
];

function Icon({ id }: { id: string }) {
  return (
    <svg className={styles.icon} aria-hidden="true">
      <use href={`${spriteUrl}#${id}`} />
    </svg>
  );
}

export default function InsideCorello() {
  return (
    <section className={styles.section} aria-labelledby="inside-corello-title">
      <h2 id="inside-corello-title">
        <img src={insideLogo} alt="Inside Corello" />
      </h2>

      <div className={styles.articles} aria-label="Artigos Inside Corello">
        {articles.map((article, index) => (
          <article
            className={article.inverted ? `${styles.article} ${styles.inverted}` : styles.article}
            key={`${article.title}-${index}`}
          >
            {article.inverted && (
              <div className={styles.articleCopy}>
                <div>
                  <h3>{article.title}</h3>
                  <p className={styles.date}>{article.date}</p>
                </div>
                <a href="/artigo" aria-label={`Ler ${article.title}`}>
                  <Icon id="diagonal-arrow" />
                </a>
                <p className={styles.description}>{article.description}</p>
              </div>
            )}
            <img src={article.image} alt="" />
            {!article.inverted && (
              <div className={styles.articleCopy}>
                <div>
                  <h3>{article.title}</h3>
                  <p className={styles.date}>{article.date}</p>
                </div>
                <a href="/artigo" aria-label={`Ler ${article.title}`}>
                  <Icon id="diagonal-arrow" />
                </a>
                <p className={styles.description}>{article.description}</p>
              </div>
            )}
          </article>
        ))}
      </div>

      <a className={styles.allArticles} href="/artigos">
        Ver todos os artigos
      </a>
    </section>
  );
}

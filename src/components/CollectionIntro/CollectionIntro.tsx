import { useRef, useState } from 'react';

import editorialImage from '../../assets/lone-star-editorial.png';
import editorialImageTwo from '../../assets/lone-star-editorial-2.png';
import editorialImageThree from '../../assets/lone-star-editorial-3.png';
import editorialImageFour from '../../assets/lone-star-editorial-4.png';

import styles from './CollectionIntro.module.css';
import spriteUrl from "../../assets/sprite.svg";

const editorialImages = [
  {
    src: editorialImage,
    alt: 'Modelo usando uma jaqueta de franjas em um cenário western',
  },
  {
    src: editorialImageTwo,
    alt: 'Produção da coleção The Lone Star',
  },
  {
    src: editorialImageThree,
    alt: 'Detalhe da coleção The Lone Star',
  },
  {
    src: editorialImageFour,
    alt: 'Look da coleção The Lone Star',
  },
];

export default function CollectionIntro() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="lone-star-title">
      <button type="button" className={styles.offer} aria-label="Ver detalhes da oferta">
        <span className="fontBraziliaThree">25% OFF em compras acima de R$ 500,00 com o cupom:</span>
        <svg className="icon" aria-hidden="true">
          <use href={`${spriteUrl}#up-arrow`} />
        </svg>
      </button>

      <div className={styles.intro}>
        <h1 id="lone-star-title">THE LONE STAR</h1>
        <p className={`${styles.byline} fontBraziliaThree`}>Corello By Gabi Silvarolli</p>
        <p className={styles.description}>
          Lançada em edições limitadas e exclusivas, a linha Corello by Gabi Silvarolli apresenta
          coleções cápsula. Em The Lone Star, referências do universo western ganham uma nova
          interpretação, traduzida em peças que valorizam autenticidade, permanência e conexão
          com a natureza. Couros especiais, trançados artesanais e combinações de materiais dão
          vida a modelos que unem design, técnica e versatilidade.
        </p>
        <a className={styles.link} href="/colecao">
          VER COLEÇÃO
        </a>
      </div>

      <div className={styles.editorial}>
        <div
          ref={galleryRef}
          className={styles.gallery}
          role="region"
          aria-label="Editorial da coleção The Lone Star"
          onScroll={(event) => {
            const gallery = event.currentTarget;
            const scrollableHeight = gallery.scrollHeight - gallery.clientHeight;
            setScrollProgress(scrollableHeight > 0 ? gallery.scrollTop / scrollableHeight : 0);
          }}
        >
          {editorialImages.map((image, index) => (
            <figure className={styles.slide} key={image.src}>
              <img src={image.src} alt={image.alt} />
              <figcaption className="visually-hidden">
                Imagem {index + 1} de {editorialImages.length}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className={styles.scrollbar} aria-hidden="true">
          <span
            className={styles.scrollbarThumb}
            style={{ transform: `translateY(${scrollProgress * 126}px)` }}
          />
        </div>
      </div>
    </section>
  );
}

import { useRef, useState } from 'react';

import productImage from '../../assets/product-bota-couro-marrom.png';
import spriteUrl from '../../assets/sprite.svg';

import styles from './ProductCarousel.module.css';

export type Product = {
  name: string;
  price: string;
  installment: string;
  image?: string;
  collection?: boolean;
  discount?: string;
};

type ProductCarouselProps = {
  products: Product[];
  label: string;
};

function Icon({ id }: { id: string }) {
  return (
    <svg className={styles.icon} aria-hidden="true">
      <use href={`${spriteUrl}#${id}`} />
    </svg>
  );
}

export default function ProductCarousel({ products, label }: ProductCarouselProps) {
  const productsRef = useRef<HTMLDivElement>(null);
  const [activeProduct, setActiveProduct] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const updateActiveProduct = () => {
    const carousel = productsRef.current;
    if (!carousel) return;
    const cardWidth = carousel.firstElementChild?.clientWidth ?? 1;
    setActiveProduct(Math.round(carousel.scrollLeft / (cardWidth + 16)));
  };

  return (
    <>
      <div
        ref={productsRef}
        className={styles.products}
        onScroll={updateActiveProduct}
        aria-label={label}
      >
        {products.map((product, index) => {
          const isFavorite = favorites.includes(index);

          return (
            <article className={styles.card} key={`${product.name}-${index}`}>
              <div className={styles.imageWrap}>
                <button
                  type="button"
                  className={styles.favorite}
                  aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                  aria-pressed={isFavorite}
                  onClick={() =>
                    setFavorites((current) =>
                      current.includes(index)
                        ? current.filter((item) => item !== index)
                        : [...current, index],
                    )
                  }
                >
                  <Icon id="heart-icon" />
                </button>
                <img
                  className={styles.productImage}
                  src={product.image ?? productImage}
                  alt={product.name}
                />
                {product.collection && <span className={`${styles.badge} fontBraziliaThree`}>COLEÇÃO</span>}
                {product.discount && <span className={`${styles.discount} fontBraziliaThree`}>{product.discount}</span>}
                <button type="button" className={styles.quickView} aria-label={`Ver ${product.name}`}>
                  <Icon id="plus-icon" />
                </button>
              </div>
              <h3 className="fontBraziliaThree">{product.name}</h3>
              <strong className="fontBraziliaSeven">{product.price}</strong>
              <p>{product.installment}</p>
            </article>
          );
        })}
      </div>

      <div className={styles.progress} aria-hidden="true">
        <span
          style={{
            width: `${100 / products.length}%`,
            left: `${(activeProduct * 100) / products.length}%`,
          }}
        />
      </div>
    </>
  );
}

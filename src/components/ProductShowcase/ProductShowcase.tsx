import { useState } from 'react';

import papeteImage from '../../assets/product-papete-pedras-marrom.png';
import ProductCarousel, { type Product } from '../ProductCarousel/ProductCarousel.tsx';

import styles from './ProductShowcase.module.css';

const categories = ['BOTAS', 'SCARPIN', 'BOLSA', 'MULE', 'SAPATILHA'];

const products: Product[] = [
  {
    name: 'Bota Couro Marrom',
    price: 'R$ 759,90',
    installment: 'ou 8x de R$ 94,98',
    collection: true,
  },
  {
    name: 'Papete Pedras Marrom',
    price: 'R$ 399,90',
    installment: 'ou 6x de R$ 66,65',
    image: papeteImage,
    discount: '15% OFF',
  },
  {
    name: 'Bota Couro Marrom',
    price: 'R$ 759,90',
    installment: 'ou 8x de R$ 94,98',
    collection: true,
  },
];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className={styles.section} aria-labelledby="products-title">
      <h2 id="products-title">ESCOLHA SEU FAVORITO</h2>

      <div className={styles.categories} role="tablist" aria-label="Categorias de produtos">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            className={activeCategory === category ? styles.categoryActive : undefined}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ProductCarousel products={products} label={`Produtos de ${activeCategory.toLowerCase()}`} />

      <a className={styles.allProducts} href="/produtos">
        VER TODOS OS PRODUTOS
      </a>
    </section>
  );
}

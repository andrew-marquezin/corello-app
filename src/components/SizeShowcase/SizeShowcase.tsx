import ProductCarousel, { type Product } from '../ProductCarousel/ProductCarousel.tsx';

import styles from './SizeShowcase.module.css';
import papeteImage from "../../assets/product-papete-pedras-marrom.png";

const sizes = ['33', '34', '35', '36', '37', '39', '40'];
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

export default function SizeShowcase() {
  return (
    <section className={styles.section} aria-labelledby="sizes-title">
      <h2 id="sizes-title">ESCOLHA POR TAMANHO</h2>
      <div className={styles.sizes} role="tablist" aria-label="Tamanhos disponíveis">
        {sizes.map((size, index) => (
          <button
            key={size}
            type="button"
            role="tab"
            aria-selected={index === 0}
            className={index === 0 ? styles.active : undefined}
          >
            {size}
          </button>
        ))}
      </div>
      <ProductCarousel products={products} label="Produtos filtrados por tamanho" />
      <a className={styles.allProducts} href="/produtos">
        VER TODOS OS PRODUTOS
      </a>
    </section>
  );
}

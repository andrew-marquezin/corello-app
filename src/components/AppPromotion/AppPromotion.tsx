import phoneMockup from '../../assets/mobile_clay_mockup.png';

import styles from './AppPromotion.module.css';

export default function AppPromotion() {
  return (
    <section className={styles.section} aria-labelledby="app-promotion-title">
      <div className={styles.background} aria-hidden="true" />
      <img className={styles.phoneBlur} src={phoneMockup} alt="" aria-hidden="true" />
      <img className={styles.phone} src={phoneMockup} alt="Aplicativo Corello aberto na tela de botas" />

      <div className={styles.content}>
        <h2 id="app-promotion-title">BAIXE O APP</h2>
        <p className={`${styles.headline} fontBraziliaThree`}>e ganhe 20% OFF na sua primeira compra.</p>
        <p className={`${styles.couponLabel} fontBraziliaThree`}>Utilize o cupom:</p>
        <div className={`${styles.coupon} fontBraziliaThree`}>APP20</div>
        <p className={styles.terms}>
          *Verifique condições*
          <br />
          Exceto em itens remarcados
        </p>
      </div>
    </section>
  );
}

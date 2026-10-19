import everydayLoveImage from '../../assets/campaign-everyday-love.png';
import dnaImage from '../../assets/campaign-dna.png';
import newCodeImage from '../../assets/campaign-new-code.png';

import styles from './Campaigns.module.css';

const campaigns = [
  {
    title: 'EVERYDAY LOVE',
    image: everydayLoveImage,
    alt: 'Modelo usando um conjunto vermelho em uma cadeira',
    layout: 'imageRight',
  },
  {
    title: 'DNA BY GABI SILVAROLLI',
    image: dnaImage,
    alt: 'Modelos junto a um cavalo',
    layout: 'imageLeft',
  },
  {
    title: 'FW/26 - NEW CODE',
    image: newCodeImage,
    alt: 'Modelo entre estruturas azuis',
    layout: 'imageRight',
  },
] as const;

export default function Campaigns() {
  return (
    <section className={styles.section} aria-labelledby="campaigns-title">
      <h2 id="campaigns-title" className="visually-hidden">
        Campanhas
      </h2>

      <div className={styles.campaigns}>
        {campaigns.map((campaign) => (
          <article className={`${styles.campaign} ${styles[campaign.layout]}`} key={campaign.title}>
            <div className={styles.copy}>
              <h3>{campaign.title}</h3>
              <a href="/campanhas">ver tudo</a>
            </div>
            <div className={styles.imageWrap}>
              <img src={campaign.image} alt={campaign.alt} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

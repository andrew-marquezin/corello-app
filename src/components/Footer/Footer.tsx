import { useState } from 'react';

import appStoreBadge from '../../assets/appStore-badge.png';
import Logo from '../../assets/corelloLogo.svg?react';
import googlePlayBadge from '../../assets/googlePlay-badge.png';
import spriteUrl from '../../assets/sprite.svg';
import WakeLogo from '../../assets/wake-logo.svg?react';
import WicommLogo from '../../assets/wicomm-logo.svg?react';

import styles from './Footer.module.css';

const aboutLinks = ['Quem somos', 'Trabalhe Conosco', 'Contato', 'Nossas Lojas', 'Inside', 'Sem Estoque'];
const socialNetworks = [
  { name: 'Facebook', icon: 'facebook' },
  { name: 'Instagram', icon: 'instagram' },
  { name: 'Youtube', icon: 'youtube' },
  { name: 'Pinterest', icon: 'pinterest' },
  { name: 'TikTok', icon: 'tiktok' },
];

export default function Footer() {
  const [openGroup, setOpenGroup] = useState<string | null>('about');

  const toggleGroup = (group: string) => {
    setOpenGroup((current) => (current === group ? null : group));
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <a className={styles.logo} href="/" aria-label="Corello, página inicial">
          <Logo />
        </a>

        <div className={styles.appRow}>
          <span>BAIXE O APP</span>
          <div className={styles.storeLinks}>
            <a href="/google-play" aria-label="Baixar no Google Play">
              <img src={googlePlayBadge} alt="Disponível no Google Play" />
            </a>
            <a href="/app-store" aria-label="Baixar na App Store">
              <img src={appStoreBadge} alt="Baixar na App Store" />
            </a>
          </div>
        </div>

        <div className={styles.groups}>
          <section className={styles.group}>
            <button type="button" onClick={() => toggleGroup('about')} aria-expanded={openGroup === 'about'}>
              SOBRE NÓS <span>{openGroup === 'about' ? '⌃' : '⌄'}</span>
            </button>
            {openGroup === 'about' && (
              <nav className={styles.links} aria-label="Sobre nós">
                {aboutLinks.map((link) => (
                  <a href={`#${link.toLowerCase().replaceAll(' ', '-')}`} key={link}>
                    {link}
                  </a>
                ))}
              </nav>
            )}
          </section>

          {['DÚVIDAS', 'FALE CONOSCO', 'GIFT CARD'].map((group) => (
            <section className={styles.group} key={group}>
              <button type="button" onClick={() => toggleGroup(group)} aria-expanded={openGroup === group}>
                {group} <span>{openGroup === group ? '⌃' : '⌄'}</span>
              </button>
            </section>
          ))}
        </div>

        <section className={styles.social} aria-label="Redes sociais">
          <h2>SIGA CORELLO</h2>
          <div className={styles.socialLinks}>
            {socialNetworks.map((network) => (
              <a href={`#${network.name.toLowerCase()}`} key={network.name}>
                <svg className={styles.socialIcon} aria-hidden="true">
                  <use href={`${spriteUrl}#${network.icon}`} />
                </svg>
                {network.name}
              </a>
            ))}
          </div>
        </section>

        <div className={styles.partners} aria-label="Parceiros">
          <WicommLogo aria-label="Wicomm" role="img" />
          <WakeLogo aria-label="Wake" role="img" />
        </div>
      </div>

      <div className={styles.legal}>
        <p>Todos os direitos reservados Corello Comercial Ltda</p>
        <p>CNPJ: 61.542.999/0029-96 IE: 141872848114</p>
        <p>Endereço: Rua João Tibiriça, 958 - Galpão11/10ºAndar</p>
        <p>Lapa / São Paulo - SP</p>
      </div>
    </footer>
  );
}

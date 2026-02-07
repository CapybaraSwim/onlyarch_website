import React from 'react';

import styles from'./Hero.module.scss';
import heroBg from '../../assets/images/hero/hero-bg.webp';

interface HeroProps {
  onOpenConsultation: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={styles.content}>
        <h1>ОнлиАрч</h1>
        <p>
          Создаём стильные и функциональные интерьеры под ключ — от концепции до реализации.
          Работаем с жилыми и коммерческими пространствами, превращая ваши идеи в гармоничную реальность.
        </p>
        <button
          className={styles.button}
          onClick={onOpenConsultation}
        >
          Заказать дизайн
        </button>
      </div>
    </section>
  );
};

export default Hero;
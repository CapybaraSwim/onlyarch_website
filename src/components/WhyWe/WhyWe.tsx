import React from 'react';
import designerImg from '../../assets/images/team/person1.png';
import emblemImg from '../../assets/images/whywe/emblem.png';
import allImg from '../../assets/images/whywe/all.png';   

const styles = require('./WhyWe.module.scss');

interface WhyWeProps {
  onOpenConsultation: () => void;
}

const WhyWe: React.FC<WhyWeProps> = ({ onOpenConsultation }) => {
  return (
    <section className={styles.whyWe}>
      <div className={styles.container}>
        <h2>ПОЧЕМУ МЫ?</h2>

        <div className={styles.content}>
          <div className={styles.image}>
            <img src={designerImg} alt="Дизайнер OnlyArch" />
            <div className={styles.designerTitle}>
              Основатель студии
            </div>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.number}>5</div>
              <div className={styles.label}>Лет опыта работы</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.number}>160</div>
              <div className={styles.label}>Проектов реализовано</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.number}>
                <img src={emblemImg} alt="Герб" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
              </div>
              <div className={styles.label}>Реализация проектов по всей России</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.number}>20+</div>
              <div className={styles.label}>Квалифицированных специалистов</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.number}>
                <img src={allImg} alt="ALL" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
              </div>
              <div className={styles.label}>Полный охват в сфере проектирования.</div>
            </div>
          </div>

          <div className={styles.text}>
            <h3>Дизайн интерьера от OnlyArch</h3>
            <p>
              Проектируем не интерьеры, а вашу новую реальность.
              Наш проект — это идеально сшитый по вашей фигуре костюм из пространства, света и функциональности.
              Вы получаете гарантированный результат, как мы его видим в 3D.
              Главный дизайнер вашего интерьера — это Вы и Ваш образ жизни.
              Мы лишь помогаем этому проявиться.
            </p>
            <button 
              className={styles.button}
              onClick={onOpenConsultation}
            >
              Консультация
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWe;
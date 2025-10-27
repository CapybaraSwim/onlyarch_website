// src/components/Pricing/Pricing.tsx
import React, { useState } from 'react';
const styles = require('./Pricing.module.scss');

import planImage from '../../assets/images/pricing/plan.png';
import technicalImage from '../../assets/images/pricing/technical.png';
import fullImage from '../../assets/images/pricing/full.png';

interface PricingProps {
  onOpenConsultation: (tariffName: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenConsultation }) => {
  return (
    <div id="tariffs" className={styles.container}>
      <h2 className={styles.sectionTitle}>РАСЧЕТ СТОИМОСТИ</h2>
      <div className={styles.pricingGrid}>
        <div className={styles.row}>
          <div className={styles.smallBlock}>
            <img src={planImage} alt="Планировочный" />
          </div>
          <div className={styles.smallBlock}>
            <div className={styles.content}>
              <h3>Тариф “Планировочный”</h3>
              <p>500 руб/м²</p>
              <button 
                className={styles.buttonFirst} 
                onClick={() => onOpenConsultation('Планировочный')}
              >
                Заказать проект
              </button>
            </div>
          </div>
          <div className={styles.largeBlock}>
            <div className={styles.content}>
              <h4>Состав тарифа:</h4>
              <ul>
                <li>Консультация с дизайнером</li>
                <li>Планировочное решение</li>
                <li>Обмерный план</li>
                <li>План расстановки мебели</li>
                <li>План демонтажа</li>
                <li>План монтажа</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.smallBlock}>
            <div className={styles.content}>
              <h3>Тариф <br/> “Технический”</h3>
              <p>1800 руб/м²</p>
              <button onClick={() => onOpenConsultation('Технический')}>
                Заказать проект
              </button>
            </div>
          </div>
          <div className={styles.largeBlock}>
            <div className={styles.content}>
              <h4>Состав тарифа:</h4>
              <ul>
                <li>3 планировочные решения</li>
                <li>План освещения</li>
                <li>Обмерный план</li>
                <li>План розеток</li>
                <li>План напольных покрытий</li>
                <li>План демонтажа</li>
                <li>План потолков</li>
                <li>План монтажа</li>
              </ul>
            </div>
          </div>
          <div className={styles.smallBlock}>
            <img src={technicalImage} alt="Технический" />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.largeBlock}>
            <div className={styles.content}>
              <h4>Состав тарифа:</h4>
              <ul>
                <li>3 планировочные решения</li>
                <li>Рабочая документация</li>
                <li>3D-визуализация</li>
                <li>Спецификация материалов</li>
                <li>Спецификация мебели</li>
                <li>Развертка стен</li>
              </ul>
            </div>
          </div>
          <div className={styles.smallBlock}>
            <img src={fullImage} alt="Полный" />
          </div>
          <div className={styles.smallBlock}>
            <div className={styles.content}>
              <h3>Тариф <br/> “Полный”</h3>
              <p>2500 руб/м²</p>
              <button onClick={() => onOpenConsultation('Полный')}>
                Заказать проект
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
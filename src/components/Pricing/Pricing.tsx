import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const styles = require('./Pricing.module.scss');

import planImage from '../../assets/images/pricing/plan.png';
import technicalImage from '../../assets/images/pricing/technical.png';
import fullImage from '../../assets/images/pricing/full.png';

interface PricingProps {
  onOpenConsultation: (tariffName: string) => void;
}

const Pricing: React.FC<PricingProps> = ({ onOpenConsultation }) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    'Планировочный': false,
    'Технический': false,
    'Полный': false,
  });

  const [isMobile, setIsMobile] = useState(false);
  const resizeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (resizeRef.current) clearTimeout(resizeRef.current);
    };
  }, []);

  const toggleExpand = (tariff: string) => {
    setExpanded(prev => ({
      ...prev,
      [tariff]: !prev[tariff],
    }));
  };

  const tariffs = [
    {
      name: 'Планировочный',
      price: '500 руб/м²',
      items: [
        'Консультация с дизайнером',
        'Планировочное решение',
        'Обмерный план',
        'План расстановки мебели',
        'План демонтажа',
        'План монтажа',
      ],
    },
    {
      name: 'Технический',
      price: '1800 руб/м²',
      items: [
        '3 планировочные решения',
        'План освещения',
        'Обмерный план',
        'План розеток',
        'План напольных покрытий',
        'План демонтажа',
        'План потолков',
        'План монтажа',
      ],
    },
    {
      name: 'Полный',
      price: '2500 руб/м²',
      items: [
        '3 планировочные решения',
        'Рабочая документация',
        '3D-визуализация',
        'Спецификация материалов',
        'Спецификация мебели',
        'Развертка стен',
      ],
    },
  ];

  return (
    <div id="tariffs" className={styles.container}>
      <h2 className={styles.sectionTitle}>РАСЧЕТ СТОИМОСТИ</h2>

      {/* МОБИЛЬНАЯ ВЕРСИЯ */}
      <AnimatePresence>
        {isMobile && (
          <motion.div
            className={styles.accordionContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {tariffs.map((tariff) => (
              <div key={tariff.name} className={styles.accordionItem}>
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggleExpand(tariff.name)}
                >
                  <span>{tariff.name}</span>

                  {expanded[tariff.name] ? (
                    <motion.div
                      className={styles.minus}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                  ) : (
                    <motion.svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="#110F0E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  )}
                </button>

                <AnimatePresence>
                  {expanded[tariff.name] && (
                    <motion.div
                      className={styles.accordionContent}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className={styles.accordionBody}>
                        <h4 className={styles.accordionTitle}>
                          Состав тарифа:
                        </h4>

                        <ul className={styles.accordionList}>
                          {tariff.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>

                        <div className={styles.accordionPrice}>
                          {tariff.price}
                        </div>

                        <button
                          className={styles.accordionButton}
                          onClick={() =>
                            onOpenConsultation(tariff.name)
                          }
                        >
                          Заказать проект
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {!isMobile && (
        <motion.div
          className={styles.pricingGrid}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      )}
    </div>
  );
};

export default Pricing;
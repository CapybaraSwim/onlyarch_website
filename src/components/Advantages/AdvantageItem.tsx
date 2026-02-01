import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
const styles = require('./Advantages.module.scss');

interface AdvantageItemProps {
  leftText: string;
  rightText: string;
  leftDescription: string;
  rightDescription: string;
  leftImage: string;
  rightImage: string;
  leftGradient: string;
  rightGradient: string;
  mobileLeftText?: string;
  mobileRightText?: string;
  mobileLeftDescription?: string;
  mobileRightDescription?: string;
}

const AdvantageItem: React.FC<AdvantageItemProps> = ({
  leftText,
  rightText,
  leftDescription,
  rightDescription,
  leftImage,
  rightImage,
  leftGradient,
  rightGradient,
  mobileLeftText,
  mobileRightText,
  mobileLeftDescription,
  mobileRightDescription,
}) => {
  const [isSwapped, setIsSwapped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const clickLockRef = useRef(false);

  // Определяем, мобильное ли устройство
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 762);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Единая функция переключения с защитой от дублей
  const toggleSwapped = () => {
    if (clickLockRef.current) return;
    clickLockRef.current = true;
    setIsSwapped((prev) => !prev);
    // Разблокируем через 300 мс (стандартная задержка touch → click)
    setTimeout(() => {
      clickLockRef.current = false;
    }, 300);
  };

  // Тексты для отображения (мобильные или основные)
  const displayLeftText = isMobile && mobileLeftText ? mobileLeftText : leftText;
  const displayRightText = isMobile && mobileRightText ? mobileRightText : rightText;
  const displayLeftDescription = isMobile && mobileLeftDescription
    ? mobileLeftDescription
    : leftDescription;
  const displayRightDescription = isMobile && mobileRightDescription
    ? mobileRightDescription
    : rightDescription;

  return (
    <motion.div
      className={`${styles.advantageBlock} ${isSwapped ? styles.swapped : ''}`}
      layout
      transition={{
        type: 'spring',
        stiffness: 40,
        damping: 10,
      }}
    >
      {/* Фоновые градиенты */}
      <motion.div
        className={styles.bgLayer}
        animate={{ opacity: isSwapped ? 0 : 1 }}
        transition={{ duration: 0.7 }}
        style={{ background: leftGradient }}
      />
      <motion.div
        className={styles.bgLayer}
        animate={{ opacity: isSwapped ? 1 : 0 }}
        transition={{ duration: 0.7 }}
        style={{ background: rightGradient }}
      />

      {/* Иконки */}
      <motion.img
        src={leftImage}
        alt={leftText}
        className={styles.absoluteImageRight}
        initial={{ opacity: 0 }}
        animate={{ opacity: isSwapped ? 0 : 1 }}
        transition={{ duration: 1.2 }}
        style={{
          zIndex: isSwapped ? 1 : 3,
        }}
      />
      <motion.img
        src={rightImage}
        alt={rightText}
        className={styles.absoluteImageLeft}
        initial={{ opacity: 0 }}
        animate={{ opacity: isSwapped ? 1 : 0 }}
        transition={{ duration: 1.2 }}
        style={{
          zIndex: isSwapped ? 3 : 1,
        }}
      />

      {/* Текстовая секция */}
      <motion.div
        key={isSwapped ? 'swapped' : 'default'}
        className={styles.textSection}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>{isSwapped ? displayRightText : displayLeftText}</h3>
        <p>{isSwapped ? displayRightDescription : displayLeftDescription}</p>
      </motion.div>

      {/* Белая плашка — интерактивная область */}
      <motion.div
        className={styles.imageSection}
        layout
        // Десктоп: hover переключает
        onMouseEnter={() => {
          if (!isMobile) toggleSwapped();
        }}
        // Мобилки и десктоп: клик/тап переключает
        onClick={toggleSwapped}
        // Предотвращаем 300ms delay и двойной триггер на iOS/Android
        onTouchStart={(e) => {
          e.preventDefault(); // ← важно!
        }}
        style={{
          cursor: isMobile ? 'pointer' : 'default',
          userSelect: 'none',
        }}
        whileTap={isMobile ? { scale: 0.95 } : {}}
      />
    </motion.div>
  );
};

export default AdvantageItem;
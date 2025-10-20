import React, { useState } from 'react';
import { motion } from 'framer-motion';
const styles = require('./Advantages.module.scss');

const AdvantageItem: React.FC<{
  leftText: string;
  rightText: string;
  leftDescription: string;
  rightDescription: string;
  leftImage: string;
  rightImage: string;
  leftGradient: string;
  rightGradient: string;
}> = ({
  leftText,
  rightText,
  leftDescription,
  rightDescription,
  leftImage,
  rightImage,
  leftGradient,
  rightGradient,
}) => {
  const [isSwapped, setIsSwapped] = useState(false);

  const handleHover = () => {
    setIsSwapped((prev) => !prev);
  };

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

      <motion.div
        key={isSwapped ? 'swapped' : 'default'}
        className={styles.textSection}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3>{isSwapped ? rightText : leftText}</h3>
        <p>{isSwapped ? rightDescription : leftDescription}</p>
      </motion.div>

      <motion.div
        className={styles.imageSection}
        layout
        onMouseEnter={handleHover}
      />
    </motion.div>
  );
};

export default AdvantageItem;
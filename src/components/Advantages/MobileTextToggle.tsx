import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileTextToggleProps {
  isSwapped: boolean;
  leftText: string;
  rightText: string;
  leftDescription: string;
  rightDescription: string;
}

const MobileTextToggle: React.FC<MobileTextToggleProps> = ({
  isSwapped,
  leftText,
  rightText,
  leftDescription,
  rightDescription,
}) => {
  return (
    <AnimatePresence mode="wait">
      {isSwapped ? (
        <motion.div
          key="swapped"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3>{rightText}</h3>
          <p>{rightDescription}</p>
        </motion.div>
      ) : (
        <motion.div
          key="default"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3>{leftText}</h3>
          <p>{leftDescription}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileTextToggle;
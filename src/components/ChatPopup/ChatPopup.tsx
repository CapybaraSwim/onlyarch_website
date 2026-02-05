import React, { useState, useEffect } from 'react';
const styles = require('./ChatPopup.module.scss');

import logoIcon from '../../assets/icons/logo2.png';
import closeIcon from '../../assets/images/footer/close.png';

interface ChatPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatPopup: React.FC<ChatPopupProps> = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      const timer = setTimeout(() => setIsMounted(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsMounted(false);
      const timer = setTimeout(() => setShouldRender(false), 300); 
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log('Отправлено:', message);
      setMessage('');
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!shouldRender) return null;

  return (
    <div className={styles.chatOverlay} onClick={handleOverlayClick}>
      <div
        className={`${styles.chatContainer} ${
          isMounted ? styles.open : ''
        }`}
      >
        <div className={styles.chatHeader}>
          <img src={logoIcon} alt="OnlyArch" className={styles.chatLogo} />
          <h3 className={styles.chatTitle}>Чат помощник</h3>
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Закрыть"
          >
            <img src={closeIcon} alt="Закрыть" className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.chatBody}>
          <div className={styles.message}>
            <p>Привет! Чем могу помочь?</p>
          </div>
        </div>
        <form className={styles.chatForm} onSubmit={handleSendMessage}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Напишите сообщение..."
            className={styles.chatInput}
          />
          <button type="submit" className={styles.sendButton}>
            →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPopup;
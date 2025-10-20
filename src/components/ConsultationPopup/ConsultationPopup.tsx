import React, { useState, useEffect } from 'react';
const styles = require('./ConsultationPopup.module.scss');

import logoIcon from '../../assets/icons/logo2.png';
import closeIcon from '../../assets/images/footer/close.png';
import phoneImage from '../../assets/images/popup.png';

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationPopup: React.FC<ConsultationPopupProps> = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false); // ← новое состояние
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isChecked) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const closeTimer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(closeTimer);
    }, 500);
  };

if (!shouldRender) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={`${styles.popupContainer} ${isMounted ? styles.open : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <img src={logoIcon} alt="OnlyArch" className={styles.logo} />
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Закрыть"
            disabled={isSubmitting || isSubmitted}
          >
            <img src={closeIcon} alt="Закрыть" className={styles.closeIcon} />
          </button>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.formSection}>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
              <div className={styles.formFields}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше Имя"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Ваш E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+7 (___) ___ __ __"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting || isSubmitted}
                  />
                </div>

                {!isSubmitted ? (
                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={!isChecked || isSubmitting}
                  >
                    {isSubmitting ? 'Отправка...' : 'Получить расчет'}
                  </button>
                ) : (
                  <div className={styles.successMessage}>
                    Отправлено!
                  </div>
                )}
              </div>
              <div className={styles.phoneImage}>
                <img src={phoneImage} alt="Интерьер" />
              </div>
            </form>
          </div>

          <div className={styles.footer}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                disabled={isSubmitting || isSubmitted}
              />
              <span>
                Отправляя заявку, я даю свое согласие на обработку моих персональных данных в соответствии с политикой обработки персональных данных. Информация на сайте не является публичной офертой.
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;
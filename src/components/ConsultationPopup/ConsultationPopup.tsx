import React, { useState, useEffect } from 'react';
import styles from'./ConsultationPopup.module.scss';

import logoIcon from '../../assets/icons/logo2.png';
import closeIcon from '../../assets/images/footer/close.png';
import phoneImage from '../../assets/images/popup.png';
import Alert from "../Alert/Alert";

interface ConsultationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTariff?: string | null;
}
const API_URL = "/api/lead";

const ConsultationPopup: React.FC<ConsultationPopupProps> = ({ isOpen, onClose, selectedTariff }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string>("");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (!isOpen) {
      const resetTimer = setTimeout(() => {
        setFormData({ name: '', email: '', phone: '' });
        setErrors({ name: '', email: '', phone: '' });
        setIsChecked(false);
        setIsSubmitted(false);
        setIsSubmitting(false);
        setSubmitError("");
      }, 300); 
      return () => clearTimeout(resetTimer);
    }
  }, [isOpen]);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      phone: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Укажите имя';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Укажите email';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
      isValid = false;
    }

    const phoneRegex = /^\+7\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Укажите телефон';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ' ').trim())) {
      newErrors.phone = 'Телефон должен начинаться с +7 и содержать 10 цифр';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isChecked) return;

    setSubmitError("");

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),

        // Можно оставить пустым, но лучше сформировать понятный текст
        comment: selectedTariff ? `Выбран тариф: ${selectedTariff}` : "",

        page: window.location.href,
        referrer: document.referrer || "",

        // extra — любые доп поля (тариф, стиль, площадь и т.д.)
        extra: {
          tariff: selectedTariff || null,
        },
      };

      const r = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await r.json().catch(() => ({}));

      if (!r.ok || !data.ok) {
        throw new Error(data.detail || "Не удалось отправить заявку");
      }

      setIsSubmitted(true);

      // Закрываем попап через 2 сек
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (err: any) {
      console.error(err);
      setSubmitError(err?.message || "Ошибка отправки. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!submitError) return;
    const t = setTimeout(() => setSubmitError(""), 5000);
    return () => clearTimeout(t);
  }, [submitError]);

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
          {selectedTariff && (
            <div className={styles.selectedTariff}>
              <h3>Выбран тариф: {selectedTariff}</h3>
            </div>
          )}
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
                  {errors.name && <span className={styles.error}>{errors.name}</span>}
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
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
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
                  {errors.phone && <span className={styles.error}>{errors.phone}</span>}
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
                  <div className={styles.successMessage}>Отправлено!</div>
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
                Отправляя заявку, я даю свое согласие на обработку моих персональных данных в соответствии с политикой
                обработки персональных данных. Информация на сайте не является публичной офертой.
              </span>
              <Alert
                  message={submitError}
                  onClose={() => setSubmitError("")}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPopup;
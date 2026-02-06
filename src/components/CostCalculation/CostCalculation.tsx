

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from'./CostCalculation.module.scss';

import brickImage from '../../assets/images/cost-calculation/kirpich.jpg';
import gasBlockImage from '../../assets/images/cost-calculation/gazoblock.jpg';
import metalFrameImage from '../../assets/images/cost-calculation/metal.jpg';
import woodFrameImage from '../../assets/images/cost-calculation/wood.webp';
import interiorImage from '../../assets/images/cost-calculation/interior.png';
import architectureImage from '../../assets/images/cost-calculation/architecture.png';
import landscapeImage from '../../assets/images/cost-calculation/landscape.png';
import visualizationImage from '../../assets/images/cost-calculation/visualization.png';
import area0_40 from '../../assets/images/cost-calculation/area-0-40.png';
import area40_80 from '../../assets/images/cost-calculation/area-40-80.png';
import area80_100 from '../../assets/images/cost-calculation/area-80-100.png';
import area100plus from '../../assets/images/cost-calculation/area-100+.png';
import phoneImage from '../../assets/images/cost-calculation/phoneimage.png';
import area0_5 from '../../assets/images/cost-calculation/area0-5.jpg';
import area5 from '../../assets/images/cost-calculation/area5.jpg';
import area6 from '../../assets/images/cost-calculation/area6.jpg';
import area6plus from '../../assets/images/cost-calculation/area6+.jpg';

import scandinavianImage from '../../assets/images/cost-calculation/scandinavian.webp';
import loftImage from '../../assets/images/cost-calculation/loft.jpg';
import minimalismImage from '../../assets/images/cost-calculation/minimalism.jpg';
import modernImage from '../../assets/images/cost-calculation/modern.jpg';
import classicImage from '../../assets/images/cost-calculation/classic.jpg';
import neoclassicImage from '../../assets/images/cost-calculation/neoclassic.jpg';
import provenceImage from '../../assets/images/cost-calculation/provence.jpg';
import wabiSabiImage from '../../assets/images/cost-calculation/wabi-sabi.jpg';
import bohoImage from '../../assets/images/cost-calculation/boho.jpg';

const CostCalculation: React.FC = () => {
  const [step, setStep] = useState<'step1' | 'step2' | 'step3' | 'step4'>('step1');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedLandArea, setSelectedLandArea] = useState<string | null>(null);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const sectionTitle = document.querySelector(`.${styles.sectionTitle}`);
    if (sectionTitle) {
      sectionTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [step]);

   const services = [
    { id: 'interior', title: 'Дизайн интерьера', image: interiorImage },
    { id: 'architecture', title: 'Архитектурный проект', image: architectureImage },
    { id: 'landscape', title: 'Ландшафтный дизайн', image: landscapeImage },
    { id: 'visualization', title: 'Визуализация', image: visualizationImage },
  ];
  const areas = [
    { id: '0-40', title: '0 - 40 м²', image: area0_40 },
    { id: '40-80', title: '40 - 80 м²', image: area40_80 },
    { id: '80-100', title: '80 - 100 м²', image: area80_100 },
    { id: '100+', title: '100+ м²', image: area100plus },
  ];

  const materials = [
    { id: 'brick', title: 'Кирпич', image: brickImage },
    { id: 'gasblock', title: 'Газоблок', image: gasBlockImage },
    { id: 'metal', title: 'Металлокаркас', image: metalFrameImage },
    { id: 'wood', title: 'Каркасный деревянный', image: woodFrameImage },
  ];

  const landAreas = [
    { id: '0-5', title: 'Меньше 5 соток', image: area0_5 },
    { id: '5', title: '5 соток', image: area5 },
    { id: '6', title: '6 соток', image: area6 },
    { id: '6+', title: 'Больше 6 соток', image: area6plus },
  ];

  const stylesList = [
    { id: 'scandinavian', title: 'Скандинавский', image: scandinavianImage },
    { id: 'loft', title: 'Лофт', image: loftImage },
    { id: 'minimalism', title: 'Минимализм', image: minimalismImage },
    { id: 'modern', title: 'Современный', image: modernImage },
    { id: 'classic', title: 'Классический', image: classicImage },
    { id: 'neoclassic', title: 'Неоклассика', image: neoclassicImage },
    { id: 'provence', title: 'Прованс', image: provenceImage },
    { id: 'wabiSabi', title: 'Ваби-Саби', image: wabiSabiImage },
    { id: 'boho', title: 'Бохо', image: bohoImage },
  ];
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  const isValidPhone = (phone: string) => {
    return phone.replace(/\D/g, '').length >= 10;
  };
  const getSelectedTitle = (id: string | null, list: { id: string; title: string }[]) => {
    return list.find(item => item.id === id)?.title || '';
  };

  const handleAreaSelect = (id: string) => {
    setSelectedArea(id);
  };
  const handleServiceSelect = (id: string) => {
    setSelectedService(id);
  };

  const handleNext = () => {
    if (step === 'step1' && selectedService) {
      setStep('step2');
    } else if (step === 'step2') {
      if (selectedService === 'landscape') {
        if (selectedLandArea) {
          setStep('step4');
        }
      } else if (selectedService === 'visualization') {
        if (selectedArea) {
          setStep('step3');
        }
      } else {
        if (selectedArea) {
          if (selectedService === 'architecture') {
            setStep('step3');
          } else {
            setStep('step4');
          }
        }
      }
    } else if (step === 'step3') {
      if (selectedService === 'visualization') {
        if (selectedStyle) {
          setStep('step4');
        }
      } else if (selectedService === 'architecture') {
        if (selectedMaterial) {
          setStep('step4');
        }
      }
    }
  };

  const handleBack = () => {
    if (step === 'step2') {
      setStep('step1');
      setSelectedService(null);
      setSelectedArea(null);
      setSelectedLandArea(null);
    } else if (step === 'step3') {
      if (selectedService === 'visualization') {
        setStep('step2');
        setSelectedArea(null);
      } else if (selectedService === 'architecture') {
        setStep('step2');
        setSelectedArea(null);
      } else {
        setStep('step2');
        setSelectedArea(null);
      }
    } else if (step === 'step4') {
      if (selectedService === 'architecture') {
        setStep('step3');
        setSelectedMaterial(null);
      } else if (selectedService === 'landscape') {
        setStep('step2');
        setSelectedLandArea(null);
      } else if (selectedService === 'visualization') {
        setStep('step3');
        setSelectedStyle(null);
      } else {
        setStep('step2');
        setSelectedArea(null);
      }
    }
  };

  const handleSubmit = () => {
    const formData = {
      service: selectedService ? getSelectedTitle(selectedService, services) : null,
      area: selectedService === 'landscape' 
        ? getSelectedTitle(selectedLandArea, landAreas)
        : getSelectedTitle(selectedArea, areas),
      material: selectedMaterial ? getSelectedTitle(selectedMaterial, materials) : null,
      style: selectedStyle ? getSelectedTitle(selectedStyle, stylesList) : null,
      name,
      email,
      phone
    };
    
    console.log('Данные для отправки:', formData);
    // Здесь будет вызов API: fetch('/api/calculate', { method: 'POST', body: JSON.stringify(formData) })
    
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>РАСЧЕТ СТОИМОСТИ</h2>
      <div className={styles.calculationBlock}>
        {step === 'step1' && (
          <>
            <h3 className={styles.stepTitle}>Выбор услуги</h3>
            <div className={styles.optionsGrid}>
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className={`${styles.option} ${selectedService === service.id ? styles.selected : ''}`}
                  onClick={() => handleServiceSelect(service.id)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.imageWrapper}>
                    <img src={service.image} alt={service.title} className={styles.optionImage} />
                    {selectedService === service.id && (
                      <div className={styles.checkbox}>✓</div>
                    )}
                  </div>
                  <p className={styles.optionTitle}>{service.title}</p>
                </motion.div>
              ))}
            </div>
            <div className={styles.buttonGroup}>
              <motion.button
                className={styles.nextButton}
                onClick={handleNext}
                disabled={!selectedService}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Далее
              </motion.button>
            </div>
          </>
        )}

        {step === 'step2' && (
          <>
            <h3 className={styles.stepTitle}>
              {selectedService === 'landscape'
                ? 'Площадь участка (сотки)'
                : 'Площадь объекта (м²)'}
            </h3>
            <div className={styles.optionsGrid}>
              {(selectedService === 'landscape' ? landAreas : areas).map((item) => (
                <motion.div
                  key={item.id}
                  className={`${styles.option} ${(
                    selectedService === 'landscape' ? selectedLandArea : selectedArea
                  ) === item.id ? styles.selected : ''}`}
                  onClick={() =>
                    selectedService === 'landscape'
                      ? setSelectedLandArea(item.id)
                      : handleAreaSelect(item.id)
                  }
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.imageWrapper}>
                    <img src={item.image} alt={item.title} className={styles.optionImage} />
                    {(
                      selectedService === 'landscape' ? selectedLandArea : selectedArea
                    ) === item.id && <div className={styles.checkbox}>✓</div>}
                  </div>
                  <p className={styles.optionTitle}>{item.title}</p>
                </motion.div>
              ))}
            </div>
            <div className={styles.buttonGroup}>
              <motion.button
                className={styles.backButton}
                onClick={handleBack}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Назад
              </motion.button>
              <motion.button
                className={styles.nextButton}
                onClick={handleNext}
                disabled={
                  (selectedService === 'landscape' && !selectedLandArea) ||
                  (selectedService !== 'landscape' && !selectedArea)
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Далее
              </motion.button>
            </div>
          </>
        )}

        {step === 'step3' && (
          <>
            <h3 className={styles.stepTitle}>
              {selectedService === 'visualization'
                ? 'Выберите стиль визуализации'
                : 'Материал строительства'}
            </h3>
            <div className={styles.optionsGrid}>
              {selectedService === 'visualization'
                ? stylesList.map((style) => (
                    <motion.div
                      key={style.id}
                      className={`${styles.option} ${selectedStyle === style.id ? styles.selected : ''}`}
                      onClick={() => setSelectedStyle(style.id)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.imageWrapper}>
                        <img src={style.image} alt={style.title} className={styles.optionImage} />
                        {selectedStyle === style.id && <div className={styles.checkbox}>✓</div>}
                      </div>
                      <p className={styles.optionTitle}>{style.title}</p>
                    </motion.div>
                  ))
                : materials.map((material) => (
                    <motion.div
                      key={material.id}
                      className={`${styles.option} ${selectedMaterial === material.id ? styles.selected : ''}`}
                      onClick={() => setSelectedMaterial(material.id)}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={styles.imageWrapper}>
                        <img src={material.image} alt={material.title} className={styles.optionImage} />
                        {selectedMaterial === material.id && <div className={styles.checkbox}>✓</div>}
                      </div>
                      <p className={styles.optionTitle}>{material.title}</p>
                    </motion.div>
                  ))}
            </div>
            <div className={styles.buttonGroup}>
              <motion.button
                className={styles.backButton}
                onClick={handleBack}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Назад
              </motion.button>
              <motion.button
                className={styles.nextButton}
                onClick={handleNext}
                disabled={
                  (selectedService === 'visualization' && !selectedStyle) ||
                  (selectedService === 'architecture' && !selectedMaterial)
                }
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Далее
              </motion.button>
            </div>
          </>
        )}

        {step === 'step4' && (
          <>
            <h3 className={styles.stepTitle}>Мы свяжемся с вами и скажем цену</h3>
        
            <div className={styles.userSelection}>
              <h4>Ваш выбор:</h4>
              <div className={styles.selectionRow}>
                {selectedService && (
                  <span className={styles.selectionItem}>
                    <strong>Услуга:</strong> {getSelectedTitle(selectedService, services)}
                  </span>
                )}
                {(selectedArea || selectedLandArea) && (
                  <span className={styles.selectionItem}>
                    <strong>Площадь:</strong> {selectedService === 'landscape'
                      ? getSelectedTitle(selectedLandArea, landAreas)
                      : getSelectedTitle(selectedArea, areas)}
                  </span>
                )}
                {selectedMaterial && (
                  <span className={styles.selectionItem}>
                    <strong>Материал:</strong> {getSelectedTitle(selectedMaterial, materials)}
                  </span>
                )}
                {selectedStyle && (
                  <span className={styles.selectionItem}>
                    <strong>Стиль:</strong> {getSelectedTitle(selectedStyle, stylesList)}
                  </span>
                )}
              </div>
            </div>
              
            <div className={styles.formContainer}>
              <div className={styles.formFields}>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="Ваше Имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    placeholder="Ваш E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___ __ __"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className={styles.actionButtons}>
                  <motion.button
                    className={styles.backButton}
                    onClick={handleBack}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Назад
                  </motion.button>
                  <motion.button
                    className={styles.submitButton}
                    onClick={handleSubmit}
                    disabled={!name || !isValidEmail(email) || !isValidPhone(phone)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Получить расчет
                  </motion.button>
                </div>
                <p className={styles.agreementText}>
                  Нажимая на кнопку "Получить расчет", я даю свое согласие на обработку персональных данных и принимаю условия соглашения
                </p>
              </div>
              <div className={styles.phoneImage}>
                <img src={phoneImage} alt="Телефон" />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CostCalculation;
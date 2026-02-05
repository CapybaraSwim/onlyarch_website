import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Импорты изображений команды
import team1 from '../../assets/images/team/person1.png';
import team2 from '../../assets/images/team/person2.png';
import team3 from '../../assets/images/team/person3.jpg';
import team4 from '../../assets/images/team/person4.jpg';
import team5 from '../../assets/images/team/person5.png';
import team6 from '../../assets/images/team/person6.png';
import team7 from '../../assets/images/team/person7.png';
import team8 from '../../assets/images/team/person8.jpg';
import team9 from '../../assets/images/team/person9.jpg';
import team10 from '../../assets/images/team/person10.jpg';

// Импорты стрелок
import leftArrow from '../../assets/images/team/left.png';
import rightArrow from '../../assets/images/team/right.png';

const styles = require('./OurTeam.module.scss');

const OurTeam: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const slidesToShow = 4;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const imageSources = [
      team1, team2, team3, team4, team5,
      team6, team7, team8, team9, team10,
    ];

    const loadImages = async () => {
      try {
        const promises = imageSources.map((src) => {
          return new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => reject(new Error(`Failed to load ${src}`));
          });
        });

        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (err) {
        console.warn('Some images failed to preload:', err);
        setImagesLoaded(true); 
      }
    };

    loadImages();
  }, []);

  const teamMembers = [
    { id: 1, fullName: 'Оганнисян Ашот Арменович', position: 'Основатель, Архитектор', image: team1 },
    { id: 2, fullName: 'Гапоян Кристина Татуловна', position: 'Дизайнер', image: team10 },
    { id: 3, fullName: 'Оганнисян Гаяне Арменовна', position: 'Юрист', image: team3 },
    { id: 4, fullName: 'Мадесов Александр Юрьевич', position: 'Архитектор', image: team2 },
    { id: 5, fullName: 'Садовников Данил Александрович', position: 'Архитектор', image: team4 },
    { id: 6, fullName: 'Говоров Кирилл Андреевич', position: 'Менеджер по продажам', image: team5 },
    { id: 7, fullName: 'Гутник Анастасия Юрьевна', position: 'Архитектор, Дизайнер', image: team6 },
    { id: 8, fullName: 'Черных Кирилл Олегович', position: 'Инженер-конструктор', image: team7 },
    { id: 9, fullName: 'Назаренко Вера Олеговна', position: 'Дизайнер, Визуализатор', image: team8 },
  ];

  const totalSlides = teamMembers.length;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < totalSlides - slidesToShow ? prev + 1 : totalSlides - slidesToShow
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerBlock}>
        <h2 className={styles.sectionTitle}>НАША КОМАНДА</h2>
      </div>

      <div className={styles.teamSlider}>
        {!isMobile && (
          <>
            <button
              className={`${styles.arrow} ${styles.leftArrow}`}
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Предыдущий слайд"
            >
              <img src={leftArrow} alt="Назад" className={styles.arrowImage} />
            </button>

            <button
              className={`${styles.arrow} ${styles.rightArrow}`}
              onClick={handleNext}
              disabled={currentIndex >= totalSlides - slidesToShow}
              aria-label="Следующий слайд"
            >
              <img src={rightArrow} alt="Вперед" className={styles.arrowImage} />
            </button>
          </>
        )}

        <div className={styles.sliderContainer}>
          {isMobile ? (
            <div className={styles.sliderMobile}>
              {teamMembers.map((member) => (
                <div key={member.id} className={styles.teamMember}>
                  <img
                    src={member.image}
                    alt={member.fullName}
                    className={styles.memberImage}
                    loading="eager"
                    decoding="async"
                  />
                  <div className={styles.memberInfo}>
                    <p className={styles.memberFullName}>{member.fullName}</p>
                    <p className={styles.memberPosition}>{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            imagesLoaded ? (
              <motion.div
                className={styles.slider}
                initial={false}
                animate={{ x: -currentIndex * (280 + 20) }}
                transition={{
                  type: 'tween',
                  duration: 0.4,
                  ease: 'easeInOut',
                }}
              >
                {teamMembers.map((member) => (
                  <div key={member.id} className={styles.teamMember}>
                    <img
                      src={member.image}
                      alt={member.fullName}
                      className={styles.memberImage}
                      loading="eager"
                      decoding="async"
                    />
                    <div className={styles.memberInfo}>
                      <p className={styles.memberFullName}>{member.fullName}</p>
                      <p className={styles.memberPosition}>{member.position}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <div className={styles.loadingPlaceholder}>
                Загрузка команды...
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
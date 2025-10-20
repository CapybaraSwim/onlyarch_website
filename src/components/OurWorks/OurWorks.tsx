import React, { useState, useEffect } from 'react';
const styles = require('./OurWorks.module.scss');

// Жилые интерьеры
import galaxy1 from '../../assets/images/projects/main/galaxy1.png';
import galaxy2 from '../../assets/images/projects/main/galaxy2.png';
import galaxy3 from '../../assets/images/projects/main/galaxy3.png';
import polevaya from '../../assets/images/projects/main/polevaya.png';
import marinagarden from '../../assets/images/projects/main/marinagarden.png';
import galaxy4 from '../../assets/images/projects/main/galaxy4.png';
import residentialExtra from '../../assets/images/projects/main/residentialExtra.png';

// Архитектурные проекты
import arch1 from '../../assets/images/projects/arch/1.png';
import arch2 from '../../assets/images/projects/arch/2.png';
import arch3 from '../../assets/images/projects/arch/3.png';
import arch4 from '../../assets/images/projects/arch/4.png';
import arch5 from '../../assets/images/projects/arch/5.png';
import arch6 from '../../assets/images/projects/arch/6.png';

const OurWorks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentProjects, setCurrentProjects] = useState<any[]>([]);

  const categories = [
    'Все проекты',
    'Жилые интерьеры',
    'Архитектурные проекты',
  ];

  const residentialProjects = [
    { image: galaxy1, title: 'ЖК "Галактика"', area: '' },
    { image: galaxy2, title: 'ЖК "Галактика"', area: '' },
    { image: galaxy3, title: 'ЖК "Галактика"', area: '' },
    { image: polevaya, title: 'Дом "Полевая"', area: '' },
    { image: marinagarden, title: 'ЖК "Марина-Гарден"', area: '' },
    { image: galaxy4, title: 'ЖК "Галактика"', area: '' },
    { image: residentialExtra, title: 'Жилой проект', area: '' },
  ];

  const architectureProjects = [
    { image: arch1, title: 'Новошахтинск', area: '72м²' },
    { image: arch2, title: 'Камышеваха', area: '117м²' },
    { image: arch3, title: 'Романовский район', area: '291м²' },
    { image: arch4, title: 'Республика Крым', area: '172м²' },
    { image: arch5, title: 'Ленинградская область', area: '254м²' },
    { image: arch6, title: 'Архитектурный проект', area: '465м²' },
  ];

  const getRandom6Residential = () => {
    const shuffled = [...residentialProjects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  };

  const getRandom6FromAll = () => {
    const all = [...residentialProjects, ...architectureProjects];
    const shuffled = [...all].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  };

  useEffect(() => {
    if (activeIndex === 0) {
      setCurrentProjects(getRandom6FromAll());
    } else if (activeIndex === 1) {
      setCurrentProjects(getRandom6Residential());
    } else if (activeIndex === 2) {
      setCurrentProjects(architectureProjects);
    }
  }, [activeIndex]);

  const handleSeeMore = () => {
    if (activeIndex === 0) {
      setCurrentProjects(getRandom6FromAll());
    }
  };

  return (
    <div id="portfolio" className={styles.container}>
      <h2 className={styles.sectionTitle}>НАШИ РАБОТЫ</h2>

      <div className={styles.categoriesContainer}>
        <ul className={styles.categoriesList}>
          {categories.map((category, index) => (
            <li key={index} className={styles.categoryItem}>
              <button
                className={`${styles.categoryButton} ${
                  activeIndex === index ? styles.active : ''
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.gridContainer}>
        {currentProjects.map((project, index) => (
          <div key={index} className={styles.projectItem}>
            <div className={styles.imageWrapper}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.overlay}>
                <div className={styles.text}>
                  <div className={styles.projectTitle}>{project.title}</div>
                  <div className={styles.projectArea}>{project.area}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeIndex === 0 && (
        <button className={styles.seeMoreButton} onClick={handleSeeMore}>
          Смотреть другие
        </button>
      )}
    </div>
  );
};

export default OurWorks;
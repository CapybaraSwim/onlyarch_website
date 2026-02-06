import React from 'react';
import styles from'./TrustUs.module.scss';

import reviewsData from '../../assets/data/reviews.json';

import avatar1 from '../../assets/images/reviews/avatar1.png';
import avatar2 from '../../assets/images/reviews/avatar2.png';
import avatar3 from '../../assets/images/reviews/avatar3.png';
import stars from '../../assets/images/reviews/stars.png';
import yandex from '../../assets/images/reviews/yandex.png';
import point from '../../assets/images/reviews/point.png';

import logo1 from '../../assets/images/partners/1.png';
import logo2 from '../../assets/images/partners/2.png';
import logo3 from '../../assets/images/partners/3.png';
import logo4 from '../../assets/images/partners/4.png';
import logo5 from '../../assets/images/partners/5.png';
import logo6 from '../../assets/images/partners/6.png';
import logo7 from '../../assets/images/partners/7.png';
import logo8 from '../../assets/images/partners/8.png';
import logo9 from '../../assets/images/partners/9.png';
import logo10 from '../../assets/images/partners/10.png';
import logo11 from '../../assets/images/partners/11.png';
import logo12 from '../../assets/images/partners/12.png';
import logo13 from '../../assets/images/partners/13.png';
import logo14 from '../../assets/images/partners/14.png';
import logo15 from '../../assets/images/partners/15.png';
import logo16 from '../../assets/images/partners/16.png';
import logo17 from '../../assets/images/partners/17.png';

const avatars = {
  avatar1,
  avatar2,
  avatar3,
};

const topLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
];
const bottomLogos = [
  logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17,
];

const TrustUs: React.FC = () => {
  return (
    <section className={styles.trustUs}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.sectionTitle}>НАМ ДОВЕРЯЮТ</h2>
      </div>

      <div className={styles.reviewsSection}>
        <h3 className={styles.reviewsTitle}>Отзывы о нас</h3>
        <div className={styles.reviewsGrid}>
          {reviewsData.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <div className={styles.header}>
                <img
                  src={avatars[review.avatar as keyof typeof avatars]}
                  alt={review.name}
                  className={styles.avatar}
                />
                <div className={styles.info}>
                  <span className={styles.date}>{review.date}</span>
                  <h4 className={styles.name}>{review.name}</h4>
                  <img src={stars} alt="5 звезд" className={styles.stars} />
                </div>
              </div>

              <p className={styles.text}>{review.text}</p>

              <div className={styles.footer}>
                <a href={review.link} className={styles.readMore} target="_blank" rel="noopener noreferrer">
                  Читать полностью
                </a>
                <div className={styles.mapLink}>
                  <a href={review.link} target="_blank" rel="noopener noreferrer">
                    <img src={yandex} alt="Яндекс" className={styles.yandexIcon} />
                  </a>
                  <a href={review.link} target="_blank" rel="noopener noreferrer">
                    <img src={point} alt="Точка" className={styles.pointIcon} />
                  </a>
                  <a href={review.link} className={styles.mapText} target="_blank" rel="noopener noreferrer">
                    Карты
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.partnersSection}>
        <h3 className={styles.partnersTitle}>Наши клиенты и партнёры</h3>

        <div className={styles.partnerStripContainer}>
          <div className={styles.partnerStripTrack}>
            {topLogos.concat(topLogos).map((logo, idx) => (
              <img
                key={`top-${idx}`}
                src={logo}
                alt={`Логотип ${idx % topLogos.length + 1}`}
                className={styles.partnerLogo}
              />
            ))}
          </div>
        </div>

        <div className={styles.partnerStripContainer}>
          <div className={styles.partnerStripTrackReverse}>
            {bottomLogos.concat(bottomLogos).map((logo, idx) => (
              <img
                key={`bottom-${idx}`}
                src={logo}
                alt={`Логотип ${idx % bottomLogos.length + 9}`}
                className={styles.partnerLogo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustUs;
import React from 'react';
const styles = require('./TrustUs.module.scss');


import avatar1 from '../../assets/images/reviews/avatar1.png';
import avatar2 from '../../assets/images/reviews/avatar2.png';
import avatar3 from '../../assets/images/reviews/avatar3.png';
import stars from '../../assets/images/reviews/stars.png';
import yandex from '../../assets/images/reviews/yandex.png';
import point from '../../assets/images/reviews/point.png';

import reviewsData from '../../assets/data/reviews.json';

import partnersTop from '../../assets/images/partners/partners-top.png';
import partnersBottom from '../../assets/images/partners/partners-bottom.png';

const TrustUs: React.FC = () => {
  const avatars = {
    avatar1,
    avatar2,
    avatar3,
  };

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
                  <a href={review.link} target="_blank" rel="noopener noreferrer"><img src={yandex} alt="Яндекс" className={styles.yandexIcon} /></a>
                  <a href={review.link} target="_blank" rel="noopener noreferrer"><img src={point} alt="Точка" className={styles.pointIcon} /></a>
                  <a href={review.link} className={styles.mapText} target="_blank" rel="noopener noreferrer">Карты</a>
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
            <img
              src={partnersTop}
              alt="Партнёры (верх)"
              className={styles.partnerStripImage}
            />
            <img
              src={partnersTop}
              alt="Партнёры (верх копия)"
              className={styles.partnerStripImage}
            />
          </div>
        </div>

        <div className={styles.partnerStripContainer}>
          <div className={styles.partnerStripTrackReverse}>
            <img
              src={partnersBottom}
              alt="Партнёры (низ)"
              className={styles.partnerStripImage}
            />
            <img
              src={partnersBottom}
              alt="Партнёры (низ копия)"
              className={styles.partnerStripImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustUs;
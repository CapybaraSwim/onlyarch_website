import React from 'react';
const styles = require('./MapBlock.module.scss');

const MapBlock: React.FC = () => {
  return (
    <section className={styles.mapBlock}>
      <div className={styles.mapContainer}>
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            width: '100%',
            height: '400px',
          }}
        >
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=39.696608%2C47.222664&whatshere%5Bpoint%5D=39.695897%2C47.222923&5Bzoom%5D=17&z=18.6"
            width="100%"
            height="100%"
            allowFullScreen
            style={{
              position: 'relative',
              border: 'none',
              filter: 'grayscale(100%)',
            }}
            title="Карта Ростова-на-Дону"
            className={styles.mapIframe}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapBlock;
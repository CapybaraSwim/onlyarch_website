import React, { useState } from 'react';
const styles = require('./Footer.module.scss');

import tgIcon from '../../assets/icons/telegram.png';
import whatsappIcon from '../../assets/icons/WhatsApp.png';
import vkIcon from '../../assets/icons/vk.png';
import logoIcon from '../../assets/icons/logo2.png';
import phoneIcon from '../../assets/images/footer/phone.png';
import closeIcon from '../../assets/images/footer/close.png';

const Footer: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsPopupOpen(false);
    }
  };

  return (
    <footer id="contacts" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <img src={logoIcon} alt="OnlyArch — дизайн интерьеров" />
        </div>

        <div className={styles.footerInfo}>
          <div className={styles.socialIcons}>
            <a href="https://t.me/OnlyArchOfficial" target="_blank" rel="noopener noreferrer">
              <img src={tgIcon} alt="Telegram" />
            </a>
            <a href="https://wa.me/79896279578" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" />
            </a>
            <a href="https://vk.com/your_page" target="_blank" rel="noopener noreferrer">
              <img src={vkIcon} alt="VK" />
            </a>
          </div>
          <div className={styles.footerLinks}>
            <a href="#about" onClick={(e) => { e.preventDefault(); setIsPopupOpen(true); }}>
              Об авторах
            </a>
            <a href="#privacy">Конфиденциальность</a>
            <span>ИНН: 610304664302</span>
            <span>ОГРН: 323619600177988</span>
          </div>
        </div>

        <div className={styles.footerContactInfo}>
          <div className={styles.contactItem}>
            <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" className={styles.contactIcon}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>ул. Максима Горького 11/43</span>
          </div>

          <div className={styles.contactItem}>
            <img src={phoneIcon} alt="Телефон" className={styles.contactIcon} />
            <span>+7 (989) 627-95-78</span>
          </div>

          <div className={styles.contactItem}>
            <img src={phoneIcon} alt="Телефон" className={styles.contactIcon} />
            <span>+7 (961) 309-34-79</span>
          </div>

          <div className={styles.contactItem}>
            <svg width="30" height="30" fill="currentColor" viewBox="0 0 24 24" className={styles.contactIcon}>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>onlyarchrnd@mail.ru</span>
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className={styles.popupOverlay} onClick={handleOverlayClick}>
          <div className={styles.popupContainer}>
            <div className={styles.popupHeader}>
              <img src={logoIcon} alt="OnlyArch" className={styles.popupLogo} />
              <h3 className={styles.popupTitle}>Об авторах</h3>
              <button
                className={styles.closeButton}
                onClick={() => setIsPopupOpen(false)}
                aria-label="Закрыть"
              >
                <img src={closeIcon} alt="Закрыть" className={styles.closeIcon} />
              </button>
            </div>
            <div className={styles.popupContent}>
              <ul className={styles.authorsList}>
                <li>
                  <a href="https://www.flaticon.com/ru/free-icons/" title="Россия иконки">
                    Россия иконки от Freepik - Flaticon
                  </a>
                </li>
                <li>
                  <a href="https://www.flaticon.com/ru/free-icons/" title="иконки">
                    иконки от Freepik - Flaticon
                  </a>
                </li>
                <li>
                  <a href="https://www.flaticon.com/ru/free-icons/-" title="управление цепочками поставок иконки">
                    Управление цепочками поставок иконки от GOWI - Flaticon
                  </a>
                </li>
                <li>
                  <a href="https://www.flaticon.com/ru/free-icons/" title="строитель иконки">
                    Строитель иконки от Good Ware - Flaticon
                  </a>
                </li>
                <li>
                  <a href="https://www.flaticon.com/ru/free-icons/-" title="проверка щита иконки">
                    Проверка щита иконки от berkahicon - Flaticon
                  </a>
                </li>
                <li>
                  <a href="https://www.flaticon.com/ru/free-icons/" title="Сотрудничество иконки">
                    Сотрудничество иконки от Uniconlabs - Flaticon
                  </a>
                </li>
                <li>
                  <a href="https://www.flaticon.com/ru/free-icons/" title="план иконки">
                    План иконки от Freepik - Flaticon
                  </a>
                </li>
                <li>
                  <a href="https://www.flaticon.com/ru/free-icons/" title="телефон иконки">
                    Телефон иконки от iconmas - Flaticon
                  </a>
                </li>
                <li>
                  <a href="https://www.flaticon.com/ru/free-icons/-" title="Эл. адрес иконки">
                    Эл. адрес иконки от kornkun - Flaticon
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
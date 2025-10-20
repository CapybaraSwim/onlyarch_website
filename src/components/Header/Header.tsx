import React from 'react';

import tgIcon from '../../assets/icons/telegram.png';
import whatsappIcon from '../../assets/icons/WhatsApp.png';
import vkIcon from '../../assets/icons/vk.png';
import logoIcon from '../../assets/icons/logo_header.png';

const styles = require('./Header.module.scss');

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <button onClick={() => scrollToSection('portfolio')} className={styles.navLink}>
          Портфолио
        </button>
        <button onClick={() => scrollToSection('tariffs')} className={styles.navLink}>
          Тарифы
        </button>
        <button onClick={() => scrollToSection('contacts')} className={styles.navLink}>
          Контакты
        </button>
      </nav>

      <div className={styles.logo} onClick={scrollToTop}>
        <img src={logoIcon} alt="OnlyArch — дизайн интерьеров" />
      </div>

      <div className={styles.contactInfo}>
        <span className={styles.phone}>+7 (989) 627-95-78</span>
        <div className={styles.icons}>
          <a href="https://t.me/OnlyArchOfficial" target="_blank" rel="noopener noreferrer">
            <img src={tgIcon} alt="Telegram" />
          </a>
          <a href="https://wa.me/79896279678" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="https://vk.com/your_page" target="_blank" rel="noopener noreferrer">
            <img src={vkIcon} alt="VK" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
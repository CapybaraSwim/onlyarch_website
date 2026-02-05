import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import tgIcon from '../../assets/icons/telegram.png';
import whatsappIcon from '../../assets/icons/WhatsApp.png';
import vkIcon from '../../assets/icons/vk.png';
import logoIcon from '../../assets/icons/logo_header.png';
import burgerIcon from '../../assets/icons/burger.png';  
import closeIcon from '../../assets/icons/close.png';    

const styles = require('./Header.module.scss');

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
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
          <div className={styles.phoneContainer}>
            <a href="tel:+79896279578" className={styles.phoneText}>
              +7 (989) 627-95-78
            </a>
            <p><a href="tel:+79896279578" className={styles.phoneText}>
              +7 (961) 309-34-79
            </a></p>
          </div>
          <div className={styles.icons}>
            <img src={tgIcon} alt="Telegram" />
            <img src={whatsappIcon} alt="WhatsApp" />
            <img src={vkIcon} alt="VK" />
          </div>
        </div>

        <button className={styles.burger} onClick={() => setMenuOpen(true)}>
          <img src={burgerIcon} alt="Menu" />
        </button>
      </header>

      <div className={styles.contentShift} />

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.aside
              className={styles.mobileMenu}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <div className={styles.headerTop}>
                <div className={styles.phoneContainer}>
                  <a href="tel:+79896279578" className={styles.phoneText}>
                    +7 (989) 627-95-78
                  </a>
                  <p><a href="tel:+79896279578" className={styles.phoneText}>
                    +7 (961) 309-34-79
                  </a></p>
                </div>
                <button className={styles.close} onClick={() => setMenuOpen(false)}>
                  <img src={closeIcon} alt="Close" />
                </button>
              </div>

              <div className={styles.socialIcons}>
                <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
                  <img src={tgIcon} alt="Telegram" />
                </a>
                <a href="https://wa.me/79896279578" target="_blank" rel="noopener noreferrer">
                  <img src={whatsappIcon} alt="WhatsApp" />
                </a>
                <a href="https://vk.com/your_vk_page" target="_blank" rel="noopener noreferrer">
                  <img src={vkIcon} alt="VK" />
                </a>
              </div>

              <nav className={styles.mobileNav}>
                <button onClick={() => scrollToSection('portfolio')}>Портфолио</button>
                <button onClick={() => scrollToSection('tariffs')}>Тарифы</button>
                <button onClick={() => scrollToSection('contacts')}>Контакты</button>
              </nav>

              <div className={styles.contactDetails}>
                <div>ул. Максима Горького 11/43</div>
                <div>onlyarchrnd@mail.ru</div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
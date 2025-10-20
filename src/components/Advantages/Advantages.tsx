import React from 'react';
const styles = require('./Advantages.module.scss');

import truckImage from '../../assets/images/advantages/truck.png';
import allCycleImage from '../../assets/images/advantages/all-cycle.png';
import teamImage from '../../assets/images/advantages/team.png';
import freedomImage from '../../assets/images/advantages/freedom.png';
import shieldImage from '../../assets/images/advantages/shield.png';
import blueprintImage from '../../assets/images/advantages/blueprint.png';

import AdvantageItem from './AdvantageItem';

const Advantages: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>НАШИ ПРЕИМУЩЕСТВА</h2>

      {/* Блок 1: Собственные поставки / Полный цикл услуг */}
      <AdvantageItem
        leftText="Собственные поставки материалов"
        rightText="Полный цикл услуг: от идеи до реализации"
        leftDescription="Работая как официальный дилер напрямую с фабриками, мы создаем для клиентов беспроигрышные условия: эксклюзивные цены без посреднических наценок и полное логистическое сопровождение с бесплатным хранением на собственных складах"
        rightDescription="Мы берем на себя все этапы работы — от первого эскиза и 3D-визуализации до авторского надзора и подбора чистовых материалов. Вы получаете готовый результат под ключ без необходимости координировать разных подрядчиков. Это экономит ваше время, деньги и нервы."
        leftImage={truckImage}
        rightImage={allCycleImage}
        leftGradient="linear-gradient(90deg, #86624C 0%, #B28D74 100%)"
        rightGradient="linear-gradient(90deg, #110F0E 0%, #353434 100%)"
      />

      {/* Блок 2: Авторский надзор / Собственные бригады */}
      <AdvantageItem
        rightText="Авторский надзор и контроль качества на всех этапах"
        leftText="Собственные бригады"
        rightDescription="Мы не просто создаем проект «в вакууме». Наши специалисты регулярно посещают объект, контролируя соответствие работ проектным решениям и качество их исполнения. Это ваша гарантия, что задуманное будет реализовано на 100% без ошибок и переделок."
        leftDescription="Над вашим проектом работает сплоченная команда наших штатных специалистов, которые досконально знают наши стандарты и имеют многолетний опыт в реализации именно наших проектов. Это обеспечивает безупречный контроль, полную согласованность и высочайшее качество работ на всех этапах"
        rightImage={shieldImage}
        leftImage={teamImage}
        leftGradient="linear-gradient(90deg, #86624C 0%, #B28D74 100%)"
        rightGradient="linear-gradient(90deg, #110F0E 0%, #353434 100%)"
      />

      {/* Блок 3: Мы несем ответственность / Полная свобода выбора */}
      <AdvantageItem
        leftText="Мы несем ответственность за каждый чертеж"
        rightText="Полная свобода выбора — наша поддержка неизменна"
        leftDescription="Наши проекты — это не только творчество, но и строгое соответствие. Мы работаем в рамках актуальных ГОСТов, СНИПов и норм ГК РФ. Это гарантирует, что ваш объект будет не только красивым, но и безопасным, законным и успешно пройдет любые проверки. С нами вы строите по правилам — без рисков."
        rightDescription="Реализуйте проект своими силами и материалами. Мы бесплатно предоставим все чертежи, спецификации и проконсультируем ваших специалистов для точного соответствия проекту. Ваш успех — наш приоритет, независимо от формата сотрудничества."
        leftImage={blueprintImage}
        rightImage={freedomImage}
        leftGradient="linear-gradient(90deg, #86624C 0%, #B28D74 100%)"
        rightGradient="linear-gradient(90deg, #110F0E 0%, #353434 100%)"
      />
    </div>
  );
};

export default Advantages;
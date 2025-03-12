import portfolio from '../assets/logo/portfolio.svg';
import clock from '../assets/logo/clock.svg';
import key from '../assets/logo/key.svg';
import area from '../assets/logo/area.svg';
import aboutBgCard1 from '../assets/images/about-card-bg.png';
import aboutBgCard2 from '../assets/images/about-card-bg2.png';
import aboutBgCard3 from '../assets/images/about-card-bg3.png';
import aboutBgCard4 from '../assets/images/about-card-bg4.png';
import aboutBgCard5 from '../assets/images/about-card-bg5.png';

const aboutData = (t) => [
  {
    id: 1,
    title: t('about.card1_title'),
    desc: t('about.card1_desc'),
    img: portfolio,
  },
  {
    id: 2,
    title: t('about.card2_title'),
    desc: t('about.card2_desc'),
    img: clock,
  },
  {
    id: 3,
    title: t('about.card3_title'),
    desc: t('about.card3_desc'),
    img: key,
  },
  {
    id: 4,
    title: t('about.card4_title'),
    desc: t('about.card4_desc'),
    img: area,
  }
];

const factData = (t) => [
  { id: 1, text: t('about.fact_card1'), image: aboutBgCard1 },
  { id: 2, text: t('about.fact_card2'), image: aboutBgCard2 },
  { id: 3, text: t('about.fact_card3'), image: aboutBgCard3 },
  { id: 4, text: t('about.fact_card4'), image: aboutBgCard4 },
  { id: 5, text: t('about.fact_card5'), image: aboutBgCard5 },
];

export { aboutData, factData };

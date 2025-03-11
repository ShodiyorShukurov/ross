import card1 from '../assets/images/newsCard1.png';
import card2 from '../assets/images/newsCard2.png';
import card3 from '../assets/images/newsCard3.png';
import card4 from '../assets/images/newsCard4.png';

export const getNewsData = (t) => [
  {
    id: 1,
    image: card1,
    title: t('news.card1_title'),
    date: t('news.card1_day'),
    type: 'news',
  },
  {
    id: 2,
    image: card2,
    title: t('news.card1_title'),
    date: t('news.card1_day'),
    type: 'news',
  },
  {
    id: 3,
    image: card3,
    title: t('news.card1_title'),
    date: t('news.card1_day'),
    type: 'news',
  },
  {
    id: 4,
    image: card4,
    title: t('news.card1_title'),
    date: t('news.card1_day'),
    type: 'aksiya',
  },
  {
    id: 5,
    image: card1,
    title: t('news.card1_title'),
    date: t('news.card1_day'),
    type: 'aksiya',
  },
  {
    id: 6,
    image: card2,
    title: t('news.card1_title'),
    date: t('news.card1_day'),
    type: 'aksiya',
  },
];

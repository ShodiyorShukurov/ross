import card1 from '../assets/news/news1.jpg';
import card2 from '../assets/nurafshon/Q2.jpg';
import card3 from '../assets/images/news_img.png';

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
    title: t('news.card2_title'),
    date: t('news.card2_day'),
    type: 'news',
  },
  {
    id: 3,
    image: card3,
    title: t('news.card3_title'),
    date: t('news.card3_day'),
    type: 'news',
  },
];

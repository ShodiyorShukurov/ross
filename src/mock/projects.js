import card1Img from '../assets/centraVista/IMG_1906.JPG';
import card2Img from '../assets/nurafshon/Q2.jpg';

export const getProjectsData = (t) => [
  {
    id: 1,
    title: t('project.card1_title'),
    location: t('project.card1_location'),
    bgImg: card1Img,
    type: 'done',
    isActive: true,
  },
  {
    id: 2,
    title: t('project.card2_title'),
    location: t('project.card2_location'),
    bgImg: card2Img,
    type: 'done',
    isActive: true,
  },
  {
    id: 3,
    title: t('project.card3_title'),
    location: t('project.card3_location'),
    bgImg: card1Img,
    type: 'done',
    isActive: false,
  },
  {
    id: 4,
    title: t('project.card4_title'),
    location: t('project.card4_location'),
    bgImg: card2Img,
    type: 'done',
    isActive: false,
  },
];

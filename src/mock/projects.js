import card1Img from '../assets/centraVista/IMG_1906.JPG';
import card2Img from '../assets/nurafshon/Q2.jpg';
import card3Img from '../assets/Asia Medline/IMG_1925.JPG'
import card4Img from '../assets/The Knowledge center/IMG_2039.JPG'
import card5Img from '../assets/MaxRoy/view_001.jpg'
import card6Img from '../assets/news/news1.jpg'
import card7Img from '../assets/images/oncowell.jpg'

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
    bgImg: card3Img,
    type: 'done',
    isActive: false,
  },
  {
    id: 4,
    title: t('project.card4_title'),
    location: t('project.card4_location'),
    bgImg: card4Img,
    type: 'done',
    isActive: false,
  },
  {
    id: 5,
    title: t('project.card5_title'),
    location: t('project.card5_location'),
    bgImg: card5Img,
    type: 'isHold',
    isActive: true,
  },
  {
    id: 6,
    title: t('project.card6_title'),
    location: t('project.card6_location'),
    bgImg: card6Img,
    type: 'isHold',
    isActive: true,
  },
  {
    id: 7,
    title: t('project.card7_title'),
    location: t('project.card7_location'),
    bgImg: card7Img,
    type: 'isHold',
    isActive: true,
  },

];

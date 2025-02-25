import card1Img from '../assets/images/projects-img1.png';
import card2Img from '../assets/images/projects-img2.png';

export const getProjectsData = (t ) => [
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
    type: 'isHold',
    isActive: false,
  },
  {
    id: 3,
    title: t('project.card1_title'),
    location: t('project.card1_location'),
    bgImg: card1Img,
    type: 'done',
    isActive: true,
  },
  {
    id: 4,
    title: t('project.card2_title'),
    location: t('project.card2_location'),
    bgImg: card2Img,
    type: 'isHold',
    isActive: true,
  },
];

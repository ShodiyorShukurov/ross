import bg from '../assets/Anhor/anhor2.jpg';
import img1 from '../assets/Anhor/anhor1.jpg';
import img2 from '../assets/Anhor/anhor2.jpg';
import img3 from '../assets/Anhor/anhor3.jpg';


const id1 = (t) => ({
  projectData: {
    id: 6,
    hero: {
      bg: bg,
      title: t('projects6.title'),
      subtitle: t('projects6.subtitle'),
      button1: t('projects6.button_text1'),
      button2: t('projects6.button_text2'),
      desc: [
        {
          id: 1,
          place: t('projects6.place'),
          location: t('projects6.place_location'),
          img: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" > <path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z" fill="#D18202" /> </svg>`,
        },
        {
          id: 2,
          place: t('projects6.school'),
          location: t('projects6.school_location'),
          img: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"> <path d="M23 18.9999H22V8.99991H18V6.58569L12 0.585693L6 6.58569V8.99991H2V18.9999H1V20.9999H23V18.9999ZM6 19H4V11H6V19ZM18 11H20V19H18V11ZM11 12H13V19H11V12Z" fill="#D18202" /></svg>',
        },
        {
          id: 3,
          place: t('projects6.business_center'),
          location: t('projects6.business_center_location'),
          img: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"> <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H17V9H20C20.5523 9 21 9.44772 21 10V19ZM7 11V13H11V11H7ZM7 7V9H11V7H7Z" fill="#D18202"/></svg>',
        },
        {
          id: 4,
          place: t('projects6.sports_complex'),
          location: t('projects6.sports_complex_location'),
          img: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"> <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.809L18.7055 10.8719ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70857 4.33299C8.00078 4.84265 6.53236 5.90735 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70857 4.33299Z" fill="#D18202" /></svg>',
        },
      ],
    },
    image_page: {
      title: t('projects6.title'),
      desc: t('projects6.image_desc'),
      images: [img3, img1, img2],
    },
    fact_page: {
      area_cards: [
        { id: 1, count: t('projects6.area'), text: t('projects6.area_title') },
        {
          id: 3,
          count: t('projects6.floor'),
          text: t('projects6.floor_title'),
        },
        {
          id: 4,
          count: t('projects6.done_project'),
          text: t('projects6.done_project_title'),
        },
      ],
    },
    calculator_page: {
      title: t('projects6.calculator'),
      subtitle: t('projects6.calculator_title'),
      area_input: t('projects6.area_input'),
      block1: t('projects6.block1'),
      block2: t('projects6.block2'),
      block3: t('projects6.block3'),
      block4: t('projects6.block4'),
      floor1: t('projects6.floor1'),
      floor2: t('projects6.floor2'),
      floor3: t('projects6.floor3'),
      calculator_business: t('projects6.calculator_business'),
      area_sum: t('projects6.area_sum'),
      area_sum_text: t('projects6.area_sum_text'),
      total_amount: t('projects6.total_amount'),
      calculator_button: t('projects6.calculator_button'),
    },
    map_page: {
      title: t('projects6.location_title'),
      position: { lat: 41.3204400, lng: 69.2680780 },
      foot: t('projects6.foot'),
      foot_location: [
        t('projects6.foot_text1'),
        t('projects6.foot_text3'),
        t('projects6.foot_text4'),
      ],
      car: t('projects6.car'),
      car_location: [
        t('projects6.car_text1'),
        t('projects6.car_text2'),
        t('projects6.car_text4'),
      ],
    },
  },
});

export default id1;

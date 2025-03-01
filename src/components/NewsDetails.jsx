import React from 'react';
import Hero from '../pages/NewsDetails/HeroPage/Hero';
import MoreInfoNews from '../pages/NewsDetails/MoreInfoNews/MoreInfoNews';
import NewsSlider from '../pages/NewsDetails/NewsPage/News';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NewsDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [module, setModule] = React.useState(null);

  const changeIdVacansies = async (id) => {
    try {
      const importedModule = await import(`../mock/news${id}.js`);
      setModule(() => importedModule.default);
    } catch (error) {
      console.error('JavaScript faylni yuklashda xatolik:', error);
      setModule(null);
    }
  };

  React.useEffect(() => {
    changeIdVacansies(id);
    window.scrollTo(0, 0);
  }, [id]);

  const newsDetail = module ? module(t).newsDetail : null;

  return (
    <>
      <Hero module={newsDetail} />
      <main>
        <MoreInfoNews module={newsDetail} />
        <NewsSlider />
      </main>
      <Footer />
    </>
  );
};

export default NewsDetails;

import { useTranslation } from "react-i18next";
import Categories from "../Components/Categories/Categories";
import Customer from "../Components/Customer/Customer";

import News from "../Components/News/News";
import Upcoming from "../Components/Upcoming/Upcoming"; 
import img1 from '../assets/images/carousel.jpeg';
import img2 from '../assets/images/carousel2.jpeg';

const Home = () => {
  const images = [img1, img2];
  const { t } = useTranslation();
  return (
    <div>
      <Upcoming images={images} title={t("home_title")}/>
      <Customer />
      <Categories title={t("our_products")}/>
      <News title={t('news')}/>

    </div>
  );
};

export default Home;

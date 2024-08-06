import { useTranslation } from "react-i18next";
import Upcoming from "../Components/Upcoming/Upcoming"
import img1 from '../assets/images/carousel.jpeg';
import img2 from '../assets/images/carousel2.jpeg';
import NewsId from "../Components/NewsId/NewsId";
const News_page = () => {
  const images = [img1, img2];
  const { t } = useTranslation();
  return (
    <div>
      <Upcoming images={images} title={t("news")}/>
      <NewsId />
    </div>
  )
}

export default News_page
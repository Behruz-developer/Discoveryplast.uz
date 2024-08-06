// import Products from "../Components/Products/Products";

import { useTranslation } from "react-i18next";
import Upcoming from "../Components/Upcoming/Upcoming";

import img1 from "../assets/images/carousel.jpeg";
import img2 from "../assets/images/carousel2.jpeg";
import Categories from "../Components/Categories/Categories";

const Categories_page = () => {
  const { t } = useTranslation();
  const images = [img1, img2];
  return (
    <div>
            <Upcoming images={images} title={t("categories")} />
            <Categories />
    </div>
  );
};

export default Categories_page;

import { useTranslation } from "react-i18next";
// import Categories from "../Components/Categories/Categories";
import Upcoming from "../Components/Upcoming/Upcoming";
import img1 from "../assets/images/carousel.jpeg";
import img2 from "../assets/images/carousel2.jpeg";
import Products from "../Components/Products/Products";


const Products_page = () => {
  const {  t } = useTranslation();

  const images = [img1, img2];


  return (
    <div>
      <Upcoming images={images} title={t("our_products")} />
      <Products />
    </div>
  );
}

export default Products_page
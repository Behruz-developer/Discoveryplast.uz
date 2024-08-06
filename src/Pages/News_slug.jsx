import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Upcoming from "../Components/Upcoming/Upcoming";
// import img1 from "../assets/images/carousel.jpeg";
// import img2 from "../assets/images/carousel2.jpeg";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const News_slug = () => {
  // const images = [img1, img2];
  const { slug } = useParams();
  const navigate = useNavigate();
  const {  i18n } = useTranslation();
  const url = `https://discoveryplast.uz/api/${i18n.language}/v1/categories`;
  async function getData() {
    const res = await axios.get(url);
    if (res.data && res.data.categories) {
      return res.data.categories.slice(0, 3);
    }
    return [];
  }
  const { data, error, isError } = useQuery({
    queryKey: ["categories", i18n.language],
    queryFn: getData,
  });
  useEffect(() => {
    const handleLanguageChange = () => {
      navigate("/");
    };
    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n, navigate]);
  if (isError) return <h2>{error.message}</h2>;
  const getProduct = data?.find((obj) => obj.slug === slug);
  const images2 = getProduct?.images
    ? JSON.parse(getProduct.images).map(
        (image) => `https://discoveryplast.uz/${image}`
      )
    : [];
  if (getProduct) {
    return (
      <>
        <Upcoming images={images2} title={getProduct.name} />
        <div className="newslug">
          <div className="container">
            <div className="newslug_box">
              <div className="newslug_card_left">
                <p className="newslug_date">{getProduct.name}</p>
                <h4 className="newslug_text">{getProduct.meta_description}</h4>
                {images2.map((image, index) => (
                  <img className="newslug_img" key={index} src={image} alt="" />
                ))}
              </div>
              <div className="newslug_card_right">
                {data &&
                  data.map((obj) => (
                    <Link
                      className="newslug_card_right_card"
                      key={obj.id}
                      to={`/news_page/${obj.slug}`}
                    >
                      {JSON.parse(obj.images).map((image, index) => (
                        <img
                          className="newslug_card_right_img"
                          key={index}
                          src={`https://discoveryplast.uz/${image}`}
                          alt=""
                        />
                      ))}
                      <p className="newslug_card_right_subtitle">{obj.name}</p>
                      <p className="newslug_card_right_text">{obj.slug}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default News_slug;

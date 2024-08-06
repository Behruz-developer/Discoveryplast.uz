import  { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router";

import Upcoming from "../Components/Upcoming/Upcoming";

// import './ImageGallery.css'; // Assuming you have a CSS file for styles

const imageZoom = (imgID, lensID) => {
  const img = document.getElementById(imgID);
  const lens = document.getElementById(lensID);
  const cx = img.naturalWidth / img.offsetWidth;
  const cy = img.naturalHeight / img.offsetHeight;

  lens.style.backgroundImage = `url('${img.src}')`;
  lens.style.backgroundSize = `${img.width * cx}px ${img.height * cy}px`;
  lens.style.backgroundRepeat = "no-repeat";

  const moveLens = (e) => {
    const pos = getCursorPos(e);
    let x = pos.x - lens.offsetWidth / 2;
    let y = pos.y - lens.offsetHeight / 2;

    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > img.width - lens.offsetWidth) x = img.width - lens.offsetWidth;
    if (y > img.height - lens.offsetHeight) y = img.height - lens.offsetHeight;

    lens.style.left = `${x}px`;
    lens.style.top = `${y}px`;
    lens.style.backgroundPosition = `-${x * cx}px -${y * cy}px`;
  };

  const getCursorPos = (e) => {
    e = e || window.event;
    const a = img.getBoundingClientRect();
    const x = e.pageX - a.left - window.pageXOffset;
    const y = e.pageY - a.top - window.pageYOffset;
    return { x, y };
  };

  img.parentNode.addEventListener("mousemove", moveLens);
  img.parentNode.addEventListener("mouseleave", () => {
    lens.style.visibility = "hidden";
  });
  img.parentNode.addEventListener("mouseenter", () => {
    lens.style.visibility = "visible";
  });
};

const Products_slug = () => {
  const { slug } = useParams();
  const {  i18n } = useTranslation();
  const navigate = useNavigate();
  const url = `https://discoveryplast.uz/api/${i18n.language}/v1/products`;

  async function getData() {
    const res = await fetch(url);
    const res2 = await res.json();
    return res2;
  }

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["products", i18n.language],
    queryFn: getData,
  });

  useEffect(() => {
    if (data) {
      imageZoom("active-image", "zoom-lens");
    }
  }, [data]);

  useEffect(() => {
    const handleLanguageChange = () => {
      navigate("/");
    };
    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n, navigate]);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;

  const getProduct = data?.find((obj) => obj.slug === slug);
  const images = JSON.parse(getProduct.images).map(
    (image) => `https://discoveryplast.uz/${image}`
  );

  const setActiveImage = (imageSrc) => {
    const activeImage = document.getElementById("active-image");
    activeImage.src = imageSrc;
    imageZoom("active-image", "zoom-lens");
  };

  return (
    <>
      <Upcoming images={images} title={getProduct.name} />

      <div className="productid">
        <div className="container">
          <div className="productid_box">
            <div className="gallery-container">
              <div className="img-zoom-container">
                <img
                  className="active_img"
                  id="active-image"
                  src={images[0]}
                  width="300"
                  height="240"
                  alt="Active Product"
                />
                <div id="zoom-lens" className="img-zoom-lens"></div>
              </div>
              <div className="thumbnails">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    onClick={() => setActiveImage(image)}
                    alt={`Thumbnail ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="productid_text_card">
              <h1 className="productid_title">{getProduct.name}</h1>
              <p className="productid_text">{getProduct.meta_description}</p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Products_slug;

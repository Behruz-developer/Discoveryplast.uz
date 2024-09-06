import { useTranslation } from "react-i18next";
import Upcoming from "../Components/Upcoming/Upcoming";

import Products from "../Components/Products/Products";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Categorie_slug = () => {
  const { i18n } = useTranslation();
  const { slug } = useParams();

  const navigate = useNavigate();
  const url = `https://aquadoctor.uz/api/${i18n.language}/v1/categories`;
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
        (image) => `https://aquadoctor.uz/${image}`
      )
    : [];
  return (
    <div>
      <Upcoming images={images2} title={getProduct.name} />
      <div className="container">
        <p className="categories_slug_text">
          Фитинги - это ключевые элементы для соединения трубопроводных систем.
          Они обеспечивают надежное и герметичное соединение труб, гарантируя
          долговечность и безопасность конструкции. Разнообразие форм и размеров
          фитингов позволяет использовать их в различных сферах, от бытовых
          систем водоснабжения до промышленных комплексов. Правильный выбор
          фитингов значительно упрощает монтаж и обслуживание трубопроводов.
        </p>
      </div>

      <Products />
    </div>
  );
};

export default Categorie_slug;

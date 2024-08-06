// import { useTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
// import categorei from "../../assets/images/categories.jpeg";
import PropTypes from "prop-types";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Categories = ({ title }) => {
  Categories.propTypes = {
    title: PropTypes.string.isRequired,
  };
  const { i18n } = useTranslation();

  const url = `https://discoveryplast.uz/api/${i18n.language}/v1/categories`;
  async function getData() {
    const res = await axios.get(url); 
    return res.data.categories;
  }

  const { data, error, isError } = useQuery({
    queryKey: ["categories", i18n.language],
    queryFn: getData,
  });

  if (isError) return <h2>{error.message}</h2>;
  return (
    <div className="categories">
      <div className="container">
        <h2 className="categories_title">{title}</h2>
        <div className="categories_box">
          {data &&
            data.map((obj) => (
              <Link
                className="categories_card"
                key={obj.id}
                to={`/category_page/${obj.slug}`}
              >
                {JSON.parse(obj.images).map((image, index) => (
                  <img
                    className="categories_img"
                    key={index}
                    src={`https://discoveryplast.uz/${image}`}
                    alt=""
                  />
                ))}
                <p className="categories_text">{obj.name}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;

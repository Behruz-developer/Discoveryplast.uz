import axios from "axios";
// import news1 from "../../assets/images/news1.jpeg";
import "./News.scss";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const News = ({ title }) => {
  const { i18n } = useTranslation();
  const url = `https://discoveryplast.uz/api/${i18n.language}/v1/categories`;
  async function getData() {
    const res = await axios.get(url);
    if (res.data && res.data.categories) {
        return res.data.categories.slice(0, 3);
      }
      return []
  }

  const { data, error, isError } = useQuery({
    queryKey: ["news", i18n.language],
    queryFn: getData,
  });
  if (isError) return <h2>{error.message}</h2>;

  return (
    <div className="news">
      <div className="container">
        <h2 className="news_title">{title}</h2>
        <div className="news_box">
          {data &&
            data.map((obj) => (
              <Link
                className="news_card"
                key={obj.id}
                to={`/news_page/${obj.slug}`}
              >
                {JSON.parse(obj.images).map((image, index) => (
                  <img
                    className="news_img"
                    key={index}
                    src={`https://discoveryplast.uz/${image}`}
                    alt=""
                  />
                ))}
                <p className="news_subtitle">{obj.name}</p>
                <p className="news_text">{obj.slug}</p>
              </Link>
            ))}
          
        </div>
      </div>
    </div>
  );
};

export default News;

/* eslint-disable react/prop-types */
import { useTranslation } from 'react-i18next';
import './NewsId.scss'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NewsId = ({title}) => {
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
    <div className="news2">
    <div className="container">
        <h2 className="news2_title">{title}</h2>
        <div className="news2_box">
        {data &&
            data.map((obj) => (
              <Link
                className="news2_card"
                key={obj.id}
                to={`/news_page/${obj.slug}`}
              >
                {JSON.parse(obj.images).map((image, index) => (
                  <img 
                    className="news2_img"
                    key={index}
                    src={`https://discoveryplast.uz/${image}`}
                    alt=""
                  />
                ))}
                <p className="news2_subtitle">{obj.name}</p>
                <p className="news2_text">{obj.slug}</p>
              </Link>
            ))}
        </div>
    </div>
</div>
  )
}

export default NewsId
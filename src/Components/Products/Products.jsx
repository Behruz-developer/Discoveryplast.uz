import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import  './Products.scss';

const Products = () => {
  const { i18n } = useTranslation();
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

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>{error.message}</h2>;

  return (
    <div className="products">
      <div className="container products_container33">
        <div className="products_box">
          {data &&
            data.map((obj) => (
              <Link
                href="#!"
                className="products_card"
                key={obj.id}
                to={`/products_page/${obj.slug}`}
              >
                {JSON.parse(obj.images).map((image, index) => (
                  <img
                    className="products_img"
                    key={index}
                    src={`https://discoveryplast.uz/${image}`}
                    alt=""
                  />
                ))}
                <p className="products_text">{obj.name}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

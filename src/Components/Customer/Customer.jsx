import { useTranslation } from "react-i18next";
import customer from "../../assets/images/customer.jpeg";

const Customer = () => {
  const { t } = useTranslation();
  return (
    <div className="customer">
      <div className="container">
        <div className="customer_box">
          <img className="customer_img" src={customer} alt="" />
          <div className="customer_card_right">
            <h2 className="customer_title">{t('customer_title')}</h2>
            <div className="customer_border"></div>
            <p className="customer_text">{t('customer_text_1')}</p>
            <p className="customer_text">      {t('customer_text_2').split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}</p>
            <p className="customer_text">{t('customer_text_3')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;

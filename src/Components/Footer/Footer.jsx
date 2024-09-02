import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/logo-removebg-preview .png'
import logo2 from '../../assets/images/logo5.png'

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer_box">
          <a href="#home" id="home">
            <img src={logo} alt="" className="footer_logo" />
          </a>
          <div className="footer_card">
            <h2 className="footer_title">{t('footer1')}</h2>
            <p className="footer_text " >{t('footer2')}</p>
          </div>
          <div className="footer_card">
            <h2 className="footer_title " >{t('footer3')}</h2>
            <a href="tel:+998970080111" className="footer_text " >{t('footer4')}</a>
            <a href="#!" className="footer_text " >{t('footer5')}</a>
          </div>
          <div className="footer_card">
            <h2 className="footer_title " >{t('footer6')}</h2>
            <a href="https://t.me/miraziz111" className="footer_link" >{t('footer7')}</a>
            <a href="https://www.instagram.com/discoveryplastuz?igsh=MTE4MnR1NmRmYmU4Nw%3D%3D&utm_source=qr" className="footer_link" >{t('footer8')}</a>
            <a href="#!" className="footer_link ">{t('footer9')}</a>
          </div>
        </div>
      </div>
      <div className="footer_end">
        <p>© 2024 Powered by</p>
        <a href="#!"><img src={logo2} alt="" /></a>
      </div>
    </footer>
  );
};

export default Footer;

import logo from '../../assets/images/logo-removebg-preview .png'
import logo2 from '../../assets/images/logo5.png'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer_box">
          <a href="#home" id="home">
            <img src={logo} alt="" className="footer_logo" />
          </a>
          <div className="footer_card">
            <h2 className="footer_title " >Адрес:</h2>
            <p className="footer_text " >Мы находимся по адресу г. Ташкент ул. Уста Ширин Ул., 116</p>
          </div>
          <div className="footer_card">
            <h2 className="footer_title " >Контакты:</h2>
            <a href="tel:+998970080111" className="footer_text " >Телефон (моб) : +998 97 008-01-11</a>
            <a href="#!" className="footer_text " >Электронная почта: discoveryplastuz@gmail.com</a>
          </div>
          <div className="footer_card">
            <h2 className="footer_title " >Cоциальные Сети:</h2>
            <a href="https://t.me/miraziz111" className="footer_link" >Телеграм-канал</a>
            <a href="#!" className="footer_link" >Инстаграм</a>
            <a href="#!" className="footer_link ">Facebook</a>
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

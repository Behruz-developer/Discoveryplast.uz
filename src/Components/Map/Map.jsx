import { useTranslation } from 'react-i18next';

const Map = () => {
  const { t } = useTranslation();

  return (
    <section className="map">
      <h2 className="map_title">{t('address')}</h2>
      <p className="map_subtitle">{t('address_subtitle')}</p>
      <div className="googlemap-container">
        <iframe
          className="googlemap"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.2821120427075!2d69.285474!3d41.292812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5b6f192e5c3%3A0x2d96cf317b62c7c6!2sMirabad%20Street%2033%2C%20Tashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1651779912384"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;

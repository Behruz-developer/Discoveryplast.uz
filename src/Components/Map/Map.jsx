import { useTranslation } from 'react-i18next';

const Map = () => {
  const { t } = useTranslation();

  return (
    <section className="map">
      <h2 className="map_title">{t('address')}</h2>
      <p className="map_subtitle">{t('footer2')}</p>
      <div className="googlemap-container">
        <iframe
          className="googlemap"
          src="https://yandex.com/map-widget/v1/?um=constructor%3Abeb454df49df8d51a70577bb7bf62ad4fd5d3c52713f1366598f72d4f7533bee&amp;source=constructor"
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

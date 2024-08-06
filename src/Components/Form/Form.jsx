import  { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const leadData = {
      name,
      phone,
      description,
    };

    try {
      const response = await fetch('https://discoveryplast.uz/api/uz/v1/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      if (response.ok) {
        setMessage(t('message_success'));
        setName('');
        setPhone('');
        setDescription('');
      } else {
        setMessage(t('message_failure'));
      }
    } catch (error) {
      console.error('Ошибка:', error);
      setMessage(t('message_error'));
    }
  };

  return (
    <div className='form'>
      <div className="container">
        <h2 className="form_title">{t('form_title')}</h2>
        <p className="form_text">{t('form_text')}</p>
        <form className="form_box" onSubmit={handleSubmit}>
          <div className="form_card">
            <p className="form_text2">{t('name')}<span>*</span></p>
            <input
              type="text"
              className="form_input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form_card">
            <p className="form_text2">{t('phone')}<span>*</span></p>
            <input
              type="text"
              className="form_input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form_textarea">
            <p className="form_text2">{t('description')}</p>
            <textarea
              type="text"
              className="form_textarea2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button type="submit" className="form_btn">{t('send_message')}</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Form;

import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from 'emailjs-com';

import Styles from './styles.module.css';

import validateForm from '../../helpers/validateForm';
import MainButton from '../MainButton';
import Message from '../Message';

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const initialErrorData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(initialErrorData);
  const [sentMessageStatus, setsentMessageStatus] = useState(false);
  const [captchaResponse, setCaptchaResponse] = useState<null | string>(null);
  const [captchaError, setCaptchaError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCaptchaChange = (e: string | null) => {
    setCaptchaError('');
    setCaptchaResponse(e);
  };

  const handleClear = () => {
    setFormData({ ...initialFormData });
  };

  const handleSend = () => {
    const tempNameError = validateForm.name(formData.name);
    const tempEmailError = validateForm.email(formData.email);
    const tempSubjectError = validateForm.subject(formData.subject);
    const tempMessageError = validateForm.message(formData.message);

    if (
      tempNameError ||
      tempEmailError ||
      tempSubjectError ||
      tempMessageError
    ) {
      setError({
        name: tempNameError || '',
        email: tempEmailError || '',
        subject: tempSubjectError || '',
        message: tempMessageError || '',
      });
      return;
    }

    if (!captchaResponse) {
      setCaptchaError('error');
      return;
    }

    emailjs.send(
      'service_d75qzp2',
      'template_40irtnh',
      {
        'g-recaptcha-response': captchaResponse,
        from_name: formData.name,
        message: formData.message,
        from_email: formData.email,
        from_subject: formData.subject || '',
      },
      'ZjNtvP3uirhfJE364'
    );

    handleClear();

    setsentMessageStatus(true);
  };

  return (
    <article className={Styles.container} id="contact">
      <form>
        <h3 id="contact" className={Styles.title}>
          Contact
        </h3>
        {(sentMessageStatus || captchaError) && (
          <Message type={captchaError ? 'error' : 'success'}>
            {captchaError
              ? 'you need to make the Captcha'
              : 'Message sent with success'}
          </Message>
        )}
        <div className={Styles.inputContainer}>
          <label htmlFor="name" className={Styles.label}>
            Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className={Styles.input}
          />
          <Message type="error">{error.name}</Message>
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor="email" className={Styles.label}>
            Email
          </label>
          <input
            name="email"
            id="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
            className={Styles.input}
          />
          <Message type="error">{error.email}</Message>
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor="subject" className={Styles.label}>
            Subject (Optional)
          </label>
          <input
            name="subject"
            id="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className={Styles.input}
          />
          <Message type="error">{error.subject}</Message>
        </div>
        <div className={Styles.inputContainer}>
          <label htmlFor="message" className={Styles.label}>
            Your Message
          </label>
          <textarea
            cols={60}
            rows={12}
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className={Styles.textarea}
          ></textarea>
          <Message type="error">{error.message}</Message>
        </div>
      </form>
      <ReCAPTCHA
        onChange={(e) => handleCaptchaChange(e)}
        sitekey="6LdTqG4gAAAAAPo_JbSUY5L-SxU8AYyj6exyX6OO"
      />
      <div className={Styles.actions}>
        <MainButton bgColor="#333" onClick={handleSend}>
          Send Message
        </MainButton>
        <MainButton bgColor="#Ff0202" onClick={handleClear}>
          Clear Data
        </MainButton>
      </div>
    </article>
  );
}

export default ContactForm;

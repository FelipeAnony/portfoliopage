import { useState } from 'react';
import validateForm from '../../helpers/validateForm';
import { MainButton, Message } from '../Template/styles';
import * as C from './styles';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClear = () => {
    setFormData({ ...initialFormData });
  };

  const handleSend = () => {
    const tempNameError = validateForm.name(formData.name);
    const tempEmailError = validateForm.email(formData.email);
    const tempSubjectError = validateForm.subject(formData.subject);
    const tempMessageError = validateForm.message(formData.message);

    setError({
      name: tempNameError || '',
      email: tempEmailError || '',
      subject: tempSubjectError || '',
      message: tempMessageError || '',
    });

    if (
      tempNameError ||
      tempEmailError ||
      tempSubjectError ||
      tempMessageError
    ) {
      return;
    }

    emailjs.send(
      'service_d75qzp2',
      'template_40irtnh',
      {
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
    <C.Container>
      <form>
        <h3>Contact</h3>
        {sentMessageStatus && (
          <Message type="success">Message sent with success</Message>
        )}
        <div className="inputContainer">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <Message type="error">{error.name}</Message>
        </div>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />
          <Message type="error">{error.email}</Message>
        </div>
        <div className="inputContainer">
          <label htmlFor="subject">Subject (Optional)</label>
          <input
            name="subject"
            id="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
          />
          <Message type="error">{error.subject}</Message>
        </div>
        <div className="inputContainer">
          <label htmlFor="message">Your Message</label>
          <textarea
            cols={60}
            rows={15}
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <Message type="error">{error.message}</Message>
        </div>
      </form>
      <ReCAPTCHA sitekey="6LeO3mkgAAAAAIH4kTxNiqIJL4C8LcOLOW-1lNJL" />
      <div className="actions">
        <MainButton BgColor="#333" onClick={handleSend}>
          Send Message
        </MainButton>
        <MainButton BgColor="#Ff0202" onClick={handleClear}>
          Clear Data
        </MainButton>
      </div>
    </C.Container>
  );
}

export default ContactForm;

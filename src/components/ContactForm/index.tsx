import * as C from './styles';

function ContactForm() {
  return (
    <C.Container>
      <h3>Contact</h3>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input name="email" id="email" type="text" />
        </div>
        <div>
          <label htmlFor="subject">Subject (Opcional)</label>
          <input name="subject" id="subject" type="text" />
        </div>
        <div>
          <label htmlFor="message">Your Message</label>
          <textarea name="message" id="message"></textarea>
        </div>
      </form>
    </C.Container>
  );
}

export default ContactForm;

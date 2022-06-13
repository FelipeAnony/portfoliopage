const validateForm = {
  email: (email: string) => {
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!email.trim()) {
      return 'The email field cannot be empty.';
    }
    if (!regexEmail.test(email.trim())) {
      return 'Invalid Email.';
    }
  },

  name: (name: string) => {
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

    if (!name.trim()) {
      return 'The name field cannot be empty.';
    }

    if (!regexName.test(name.trim())) {
      return 'The field name only accepts letters and spaces.';
    }
  },

  subject: (subject: string) => {
    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü?!\s]+$/;
    if (!subject) return;

    if (!regexName.test(subject.trim())) {
      return 'The field name only accepts letters and spaces.';
    }
  },

  message: (message: string) => {
    if (!message.trim()) {
      return 'The message field cannot be empty.';
    }
  },
};

export default validateForm;

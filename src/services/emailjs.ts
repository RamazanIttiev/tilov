import emailjs from '@emailjs/browser';
import { MailData } from '../components/Form';

export const sendEmail = ({
  name,
  surname,
  email,
  phone,
  message,
}: MailData) => {
  const templateParams = {
    from_name: `${name} ${surname}`,
    to_name: 'Азамат Жамалович',
    reply_to: email,
    phone,
    message,
  };

  emailjs.init('user_i1BjZNlXLkdMiSMTyPs0j');
  emailjs.send('service_8hmlcci', 'template_19mo9t9', templateParams).then(
    response => {
      console.log('SUCCESS!', response.status, response.text);
    },
    error => {
      console.log('FAILED...', error);
    }
  );
};

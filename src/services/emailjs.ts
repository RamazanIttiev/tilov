import emailjs from '@emailjs/browser';
import { FormValues } from '../components/form/form-container';

export const sendEmail = ({
  name,
  surname,
  email,
  phone,
  message,
}: FormValues) => {
  const templateParams = {
    from_name: `${name} ${surname}`,
    to_name: 'Азамат Жамалович',
    reply_to: email,
    phone,
    message,
  };

  return new Promise((resolve, reject) => {
    emailjs.init('user_i1BjZNlXLkdMiSMTyPs0j');
    emailjs
      .send('service_8hmlcci', 'template_19mo9t9', templateParams)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

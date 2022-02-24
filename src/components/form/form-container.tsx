import { Box, Container } from '@mui/material';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormComponent } from './form-component';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export type FormValues = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  message: string;
};

export const FormContainer: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openAlert, setAlert] = useState(false);
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^([^0-9]*)$/, 'Имя не должно содержать цифры')
      .required('Обязательное поле'),
    surname: yup
      .string()
      .matches(/^([^0-9]*)$/, 'Фамилия не должна содержать цифры')
      .required('Обязательное поле'),
    phone: yup
      .string()
      .required('Обязательное поле')
      .test('phone', 'Телефон слишком короткий', value => {
        const number = value?.replace(/\/_/g, '').length;
        return number === 17;
      })
      .min(17, 'Телефон слишком короткий')
      .typeError('Обязательное поле'),
    email: yup
      .string()
      .email('Формат почты не верный')
      .required('Обязательное поле'),
  });

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const handleClose = () => {
    setAlert(false);
  };

  const handleSubmitForm = async (data: FormValues) => {
    try {
      setIsLoading(true);

      // const emailResult = await sendEmail({ ...data });
      const emailResult = await new Promise(res => setTimeout(res, 1000));
      console.log(data.phone.length);
      setAlert(true);
      setIsLoading(false);

      reset();
      return emailResult;
    } catch (err) {
      setError(true);
      return err;
    }
  };

  return (
    <Box sx={{ p: '48px 0' }}>
      <Container maxWidth="lg">
        <FormComponent
          handleSubmitForm={handleSubmitForm}
          handleSubmit={handleSubmit}
          handleClose={handleClose}
          register={register}
          isLoading={isLoading}
          openAlert={openAlert}
          errors={errors}
          error={error}
        />
      </Container>
    </Box>
  );
};

import { Box, Container } from '@mui/material';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormComponent } from './form-component';

export type FormValues = {
  name: string;
  surname: string;
  email: string;
  phone: number | '';
  message: string;
};

export const FormContainer: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openAlert, setAlert] = useState(false);
  const [error, setError] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const handleClose = () => {
    setAlert(false);
  };

  const handleSubmitForm = async (data: FormValues) => {
    try {
      setIsLoading(true);

      // const emailResult = await sendEmail({ ...data });
      const emailResult = await new Promise(res => setTimeout(res, 1000));
      console.log(data);
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

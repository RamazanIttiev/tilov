import {
  Alert,
  Box,
  Container,
  Snackbar,
  SnackbarCloseReason,
  styled,
  TextareaAutosize,
} from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '32px auto 0',
  maxWidth: '600px',
}));

const Input = styled('input')(() => ({
  padding: '8px',
  height: '64px',
  border: '1px solid #c9cacc',
  borderRadius: '4px',
  // border: ${props => props.error && '1px solid #EB1717'},
  boxSizing: 'border-box',
  boxShadow: '0px 0px 4px rgb(0 0 0 / 20%)',
  marginBottom: '16px',
  fontSize: '16px',
}));

const Textarea = styled(TextareaAutosize)(() => ({
  padding: '8px',
  border: '1px solid #c9cacc',
  borderRadius: '4px',
  // border: ${props => props.error && '1px solid #EB1717'},
  boxSizing: 'border-box',
  boxShadow: '0px 0px 4px rgb(0 0 0 / 20%)',
  fontSize: '16px',
}));

const StyledButton = styled('button')(props => ({
  background: props.theme.palette.secondary.main,
  borderRadius: '50px',
  opacity: props.disabled ? '0.6' : '1',
  color: '#fff',
  padding: '24px',
  fontWeight: 700,
  fontSize: '14px',
  cursor: props.disabled ? 'default' : 'pointer',
  border: 'none',
  outline: 'none',
  display: 'block',
  margin: '24px auto 0',
  transition: 'transform 0.3s',
  // &:hover {
  //   transform: scale(1.1);
  // }
}));

// const TermsPolicy = styled(Typography)`
//   margin-top: 16px !important;
//   font-size: 13px !important;
// `;

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openAlert, setAlert] = useState(false);
  const [error] = useState(false);

  const {
    handleSubmit,
    // formState: { errors },
    register,
    // reset,
  } = useForm();

  const closeAlert = (
    event: Event | SyntheticEvent<never, Event>,
    reason: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    console.log(event);

    setAlert(false);
  };

  const formSubmit = (data: object) => {
    setIsLoading(true);
    console.log(data);
  };
  //   postData(data)
  //     .then(response => {
  //       if (response.status === 200) {
  //         setAlert(true);
  //         setIsLoading(false);
  //         setTimeout(() => {
  //           closeAlert();
  //           handleClose();
  //         }, 2000);
  //       }
  //     })
  //     .catch(err => {
  //       if (err) {
  //         setError(true);
  //         setAlert(true);
  //         setTimeout(() => {
  //           closeAlert();
  //           handleClose();
  //         }, 4000);
  //       }
  //     })
  //     .finally(() => {
  //       reset();
  //     });
  // };

  return (
    <Box sx={{ p: '48px 0' }}>
      <Container maxWidth="lg">
        <StyledForm onSubmit={handleSubmit(formSubmit)}>
          <Input
            {...register('name', { required: true })}
            name="name"
            // error={errors.name}
            type="text"
            placeholder="ФИО"
          />
          <Input
            {...register('phone', { required: true })}
            name="phone"
            // error={errors.phone}
            type="number"
            placeholder="Ваш номер телефона"
          />
          <Textarea
            {...register('message', { required: true })}
            name="message"
            style={{ height: '124px', resize: 'none' }}
            // error={errors.message}
            placeholder="Кратко опишите проблему"
          />
          {/*<TermsPolicy>*/}
          {/*  Нажимая на кнопку, Вы принимаете&nbsp;*/}
          {/*  <Link target="_blank" to="/terms">*/}
          {/*    Положение*/}
          {/*  </Link>*/}
          {/*  &nbsp;и&nbsp;*/}
          {/*  <Link target="_blank" to="/accept">*/}
          {/*    согласие*/}
          {/*  </Link>*/}
          {/*  &nbsp;на обработку персональных данных*/}
          {/*</TermsPolicy>*/}
          <StyledButton disabled={isLoading} type="submit">
            Получить консультацию
          </StyledButton>
          <Snackbar
            open={openAlert}
            autoHideDuration={6000}
            onClose={closeAlert}
          >
            <Alert
              severity={error ? 'error' : 'success'}
              sx={{ width: '100%' }}
            >
              {error
                ? 'Произошла ошибка, запишитесь пожалуйста по телефону'
                : 'Ваша заявка успешно отправлена'}
            </Alert>
          </Snackbar>
        </StyledForm>
      </Container>
    </Box>
  );
};

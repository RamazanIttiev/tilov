import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Snackbar,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { FileUpload } from './FileUpload';
import { AccountCircle, Email, PhoneIphone } from '@mui/icons-material';

import mailSender from '../services/mailer';

const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: '600px',
}));

const StyledButton = styled(Button)(props => ({
  opacity: props.disabled ? '0.6' : '1',
  cursor: props.disabled ? 'default' : 'pointer',
  margin: '0 auto',
  width: '50%',
}));

const TermsPolicy = styled(Typography)(() => ({
  margin: '16px 0 !important',
  fontSize: '13px !important',
}));

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openAlert, setAlert] = useState(false);
  const [error, setError] = useState(false);
  const [files, setFiles] = useState([]);
  const [checked, setChecked] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };

  const formSubmit = (data: object) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    mailSender();

    setTimeout(() => {
      setAlert(true);
    }, 2000);
    reset();
  };

  return (
    <Box sx={{ p: '48px 0' }}>
      <Container maxWidth="lg">
        <StyledForm
          action="phpmailer.php"
          method="post"
          onSubmit={handleSubmit(formSubmit)}
        >
          <Grid container spacing={3}>
            <Grid item xs={11} sm={6} md={6}>
              <TextField
                /*{...register('name', { required: true })}*/
                // required
                name="name"
                error={!!errors.name}
                label="Имя"
                variant="outlined"
                autoComplete="off"
                helperText={!!errors.name && 'Введите Имя'}
                sx={{ width: '100%', mb: 3 }}
                InputProps={{
                  endAdornment: <AccountCircle />,
                }}
              />
            </Grid>
            <Grid item xs={11} sm={6} md={6}>
              <TextField
                /*{...register('surname', { required: true })}*/
                // required
                name="surname"
                error={!!errors.surname}
                label="Фамилия"
                variant="outlined"
                autoComplete="off"
                helperText={!!errors.surname && 'Введите фамилию'}
                sx={{ width: '100%', mb: 3 }}
                InputProps={{
                  endAdornment: <AccountCircle />,
                }}
              />
            </Grid>
          </Grid>
          {/*<InputMask mask="8 999 999-99-99" disabled={false}>*/}
          {/*</InputMask>*/}
          <TextField
            /*{...register('phone', { required: true })}*/
            // required
            id="phone"
            name="phone"
            inputMode="tel"
            type="number"
            error={!!errors.name}
            label="Номер телефона"
            variant="outlined"
            autoComplete="off"
            helperText={!!errors.phone && 'Введите номер телефона'}
            sx={{ mb: 3 }}
            InputProps={{
              endAdornment: <PhoneIphone />,
            }}
          />
          <TextField
            /*{...register('email', { required: true })}*/
            // required
            name="email"
            error={!!errors.email}
            type="email"
            label="Ваш email"
            variant="outlined"
            autoComplete="off"
            helperText={!!errors.email && 'Введите email'}
            sx={{ mb: 3 }}
            InputProps={{
              endAdornment: <Email />,
            }}
          />
          <TextField
            {...register('message')}
            name="message"
            style={{ resize: 'none' }}
            error={!!errors.message}
            label="Кратко опишите проблему"
            multiline
            maxRows={8}
            variant="outlined"
            autoComplete="off"
            helperText={!!errors.message && 'Опишите проблему'}
            sx={{ mb: 3 }}
          />
          <FileUpload
            checked={checked}
            setChecked={setChecked}
            register={register}
            files={files}
            setFiles={setFiles}
          />
          <TermsPolicy>
            Нажимая на кнопку, Вы принимаете&nbsp;
            <Link color="#fff" href="#">
              Положение
            </Link>
            &nbsp;и&nbsp;
            <Link color="#fff" href="#">
              согласие
            </Link>
            &nbsp;на обработку персональных данных
          </TermsPolicy>
          <StyledButton
            onClick={() =>
              setValue(
                'files',
                // @ts-ignore
                files.map(file => file.file),
                {
                  shouldValidate: true,
                }
              )
            }
            variant="contained"
            color="primary"
            disabled={isLoading}
            type="submit"
          >
            Получить консультацию
          </StyledButton>

          <Snackbar open={openAlert} autoHideDuration={6000}>
            <Alert
              severity={error ? 'error' : 'success'}
              sx={{ width: '100%' }}
              onClose={handleClose}
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

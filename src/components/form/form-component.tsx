import React, { FC } from 'react';
import {
  Alert,
  Button,
  Grid,
  Link,
  Snackbar,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { AccountCircle, Email, PhoneIphone } from '@mui/icons-material';
import { FormValues } from './form-container';
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
} from 'react-hook-form';
import { UseFormRegister } from 'react-hook-form/dist/types/form';
import InputMask from 'react-input-mask';

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

interface FormComponentProps {
  handleSubmitForm: SubmitHandler<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  handleClose: () => void;
  isLoading: boolean;
  openAlert: boolean;
  register: UseFormRegister<FormValues>;
  error: boolean;
  errors: FieldErrors;
}

export const FormComponent: FC<FormComponentProps> = ({
  handleSubmitForm,
  handleSubmit,
  handleClose,
  register,
  isLoading,
  openAlert,
  error,
  errors,
}) => {
  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit(handleSubmitForm)}>
      <Grid container spacing={3}>
        <Grid item xs={11} sm={6} md={6}>
          <TextField
            {...register('name')}
            error={!!errors.name}
            helperText={errors?.name?.message}
            label="Имя *"
            variant="outlined"
            autoComplete="off"
            sx={{ width: '100%', mb: 3 }}
            InputProps={{
              endAdornment: <AccountCircle />,
            }}
          />
        </Grid>
        <Grid item xs={11} sm={6} md={6}>
          <TextField
            {...register('surname')}
            error={!!errors.surname}
            helperText={errors?.surname?.message}
            label="Фамилия *"
            variant="outlined"
            autoComplete="off"
            sx={{ width: '100%', mb: 3 }}
            InputProps={{
              endAdornment: <AccountCircle />,
            }}
          />
        </Grid>
      </Grid>

      <InputMask mask="8 (999) 999 99 99" {...register('phone')}>
        {() => {
          return (
            <TextField
              name="phone"
              type="text"
              error={!!errors.phone}
              helperText={errors?.phone?.message}
              label="Номер телефона *"
              variant="outlined"
              autoComplete="off"
              sx={{ mb: 3 }}
              InputProps={{
                endAdornment: <PhoneIphone />,
              }}
            />
          );
        }}
      </InputMask>

      <TextField
        {...register('email')}
        error={!!errors.email}
        helperText={errors?.email?.message}
        type="email"
        label="Ваш email *"
        variant="outlined"
        autoComplete="off"
        sx={{ mb: 3 }}
        InputProps={{
          endAdornment: <Email />,
        }}
      />
      <TextField
        {...register('message')}
        style={{ resize: 'none' }}
        error={!!errors.message}
        helperText={errors?.message?.message}
        label="Кратко опишите проблему"
        multiline
        maxRows={8}
        variant="outlined"
        autoComplete="off"
        sx={{ mb: 3 }}
      />
      {/*<FileUpload*/}
      {/*  checked={checked}*/}
      {/*  setChecked={setChecked}*/}
      {/*  register={register}*/}
      {/*  files={files}*/}
      {/*  setFiles={setFiles}*/}
      {/*/>*/}
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
        /* onClick={() =>
        //   setValue(
        //     'files',
        //     files.map(file => file.file),
        //     {
        //       shouldValidate: true,
        //     }
        //   )
        */
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
  );
};

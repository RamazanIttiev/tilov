import {
  Alert,
  Box,
  Button,
  Container,
  Link,
  Snackbar,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond/dist/filepond.min.css';
import 'filepond/dist/filepond.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { FileUpload } from './FileUpload';

const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: '600px',
}));

const Input = styled(TextField)(() => ({
  marginBottom: 24,
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
  console.log(files);
  registerPlugin(FilePondPluginImagePreview);

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
    setTimeout(() => {
      setAlert(true);
    }, 2000);
    reset();
  };

  return (
    <Box sx={{ p: '48px 0' }}>
      <Container maxWidth="lg">
        <StyledForm onSubmit={handleSubmit(formSubmit)}>
          <Input
            {...register('name', { required: true })}
            name="name"
            error={!!errors.name}
            label="ФИО"
            variant="outlined"
            autoComplete="off"
            helperText={!!errors.name && 'Введите ФИО'}
          />
          <Input
            {...register('email', { required: true })}
            name="email"
            error={!!errors.email}
            type="email"
            label="Ваш email"
            variant="outlined"
            autoComplete="off"
            helperText={!!errors.email && 'Введите email'}
          />
          <Input
            {...register('message', { required: true })}
            name="message"
            style={{ resize: 'none' }}
            error={!!errors.message}
            label="Кратко опишите проблему"
            multiline
            maxRows={8}
            variant="outlined"
            autoComplete="off"
            helperText={!!errors.message && 'Опишите проблему'}
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
            color="secondary"
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

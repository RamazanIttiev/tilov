import {
  Alert,
  Box,
  Button,
  Container,
  Snackbar,
  SnackbarCloseReason,
  styled,
  TextField,
} from '@mui/material';
import React, { SyntheticEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FilePond as FilePondComponent, registerPlugin } from 'react-filepond';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond/dist/filepond.css';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  maxWidth: '600px',
}));

const Input = styled(TextField)(() => ({
  // border: ${props => props.error && '1px solid #EB1717'},
  marginBottom: 24,
}));

const StyledButton = styled(Button)(() => ({
  // opacity: props.disabled ? '0.6' : '1',
  // cursor: props.disabled ? 'default' : 'pointer',
  margin: '0 auto',
  width: '50%',
}));

// const TermsPolicy = styled(Typography)`
//   margin-top: 16px !important;
//   font-size: 13px !important;
// `;

export const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [openAlert, setAlert] = useState(false);
  const [error] = useState(false);
  const [files, setFiles] = useState([]);
  registerPlugin(FilePondPluginImagePreview);
  const {
    handleSubmit,
    // formState: { errors },
    register,
    // reset,
    setValue,
  } = useForm();

  const closeAlert = (
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    event: Event | SyntheticEvent<never, Event>,
    reason: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };

  const formSubmit = (data: object) => {
    console.log(data);
    // setIsLoading(true);
  };

  return (
    <Box sx={{ p: '48px 0' }}>
      <Container maxWidth="lg">
        <StyledForm onSubmit={handleSubmit(formSubmit)}>
          <Input
            {...register('name', { required: true })}
            name="name"
            // error={errors.name}
            label="ФИО"
            variant="outlined"
          />
          <Input
            {...register('phone', { required: true })}
            name="phone"
            // error={errors.phone}
            type="number"
            label="Ваш номер телефона"
          />
          <Input
            {...register('message', { required: true })}
            name="message"
            style={{ height: '124px', resize: 'none' }}
            // error={errors.message}
            label="Кратко опишите проблему"
            multiline
            maxRows={6}
          />
          <FilePondComponent
            {...register('files')}
            files={files}
            // @ts-ignore
            onupdatefiles={setFiles}
            allowMultiple={true}
            allowBrowse={true}
            allowDrop={true}
            maxFiles={3}
            name="files"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
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

import React, { Dispatch, SetStateAction } from 'react';
import { Box, Paper, Zoom } from '@mui/material';
import { ControlledSwitch } from '../UI/Switch';
import { FilePond as FilePondComponent } from 'react-filepond';
import { UseFormRegisterReturn } from 'react-hook-form';
import 'filepond/dist/filepond.min.css';
import 'filepond/dist/filepond.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

type FileUploadType = {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  register: (name: string) => UseFormRegisterReturn;
  files: never[];
  setFiles: (files: []) => void;
};

export const FileUpload = ({
  checked,
  setChecked,
  register,
  files,
  setFiles,
}: FileUploadType) => {
  return (
    <Box>
      <ControlledSwitch checked={checked} setChecked={setChecked} />
      <Zoom in={checked}>
        <Paper sx={{ m: 1 }} elevation={4}>
          {checked && (
            <FilePondComponent
              {...register('files')}
              files={files}
              // @ts-ignore
              onupdatefiles={setFiles}
              allowMultiple={true}
              allowBrowse={true}
              allowDrop={true}
              maxFiles={6}
              name="files"
              server="https://www.lawsuitgroup.ru/"
              labelIdle='Перетащите файлы или <span class="filepond--label-action">Загрузите</span>'
            />
          )}
        </Paper>
      </Zoom>
    </Box>
  );
};

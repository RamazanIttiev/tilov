import * as React from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import { FormControlLabel } from '@mui/material';

export const ControlledSwitch = ({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: (checked: boolean) => void;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormGroup sx={{ mb: '16px' }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Прикрепить файлы"
        color="primary"
      />
    </FormGroup>
  );
};

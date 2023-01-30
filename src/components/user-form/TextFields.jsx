import { FormControl, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export const TextFields = ({ label, inputProps, control, name, errors }) => {
  return (
    <FormControl fullWidth>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            required
            label={label}
            InputProps={inputProps}
            error={!!errors?.[name]}
            helperText={errors?.[name] ? errors[name].message : null}
          />
        )}
      />
    </FormControl>
  );
};

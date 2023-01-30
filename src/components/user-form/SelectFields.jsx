import { FormControl, MenuItem, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

export const SelectFields = ({ label, name, control, errors }) => {
  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            required
            select
            label={label}
            error={!!errors?.[name]}
            helperText={errors?.[name] ? errors[name].message : null}
          >
            <MenuItem value="male">Masculino</MenuItem>
            <MenuItem value="female">Feminino</MenuItem>
            <MenuItem value="other">Outro</MenuItem>
          </TextField>
        )}
      />
    </FormControl>
  );
};

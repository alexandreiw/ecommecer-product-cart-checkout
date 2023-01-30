import { Box, Button, Paper, Grid, Typography, Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SelectFields } from './SelectFields';
import { TextFields } from './TextFields';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/user/actions';
import { selectProductsTotalPrice } from '../../redux/cart/cartSelectors';
import { useNavigate } from 'react-router-dom';

const schema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(3, 'Nome dever ter pelo menos 3 caracteres'),
  email: yup.string().required('E-mail é obrigatório').email('Por favor digite um e-mail válido'),
  genrer: yup.string().required('Campo sexo é obrigatório'),
});

export const UserForm = () => {
  const dispatch = useDispatch();
  const productsTotalPrice = useSelector(selectProductsTotalPrice);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      genrer: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(loginUser(data));
    navigate('/finalizacao');
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={5}>
            <TextFields errors={errors} control={control} name="name" label="Nome" />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <TextFields errors={errors} control={control} name="email" label="E-mail" />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <SelectFields errors={errors} control={control} name="genrer" label="Sexo" />
          </Grid>
        </Grid>
        <Stack display="flex" alignItems="end" my={2} spacing={2}>
          <Typography variant="h6" marginLeft="auto">
            Total: {productsTotalPrice}
          </Typography>
          <Button type="submit" variant="contained" color="warning" sx={{ ml: 'auto' }}>
            finalizar compras
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

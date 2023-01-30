import { Box, Button, useTheme, Typography, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectProductsTotalPrice } from '../../redux/cart/cartSelectors';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/user/actions';
import { removeAllProducts } from '../../redux/cart/actions';

export const CheckoutPage = () => {
  const theme = useTheme();
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const totalProductPrice = useSelector(selectProductsTotalPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logoutUser());
    dispatch(removeAllProducts());
    navigate('/');
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgcolor={theme.palette.secondary.light}
      height="100vh"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bgcolor={{ xs: 'transparent', md: 'white' }}
        p={{ md: 10, lg: 12 }}
        gap={2}
      >
        <Typography variant="h5">
          {currentUser ? currentUser.name : 'User is not logged in '},
        </Typography>
        <Stack direction="row" spacing={1}>
          <Typography component="div" display="flex" alignItems="center">
            Sua compra no valor
          </Typography>
          <Typography fontWeight={700} color={theme.palette.primary.main}>
            {totalProductPrice}
          </Typography>
        </Stack>
        <Typography>foi finalizada com sucesso</Typography>
        <Box component="img" height="auto" width="150px" my={4} src={'./purchase.png'} />
        <Button variant="contained" color="warning" onClick={handleClick}>
          iniciar nova compra
        </Button>
      </Box>
    </Box>
  );
};

import {
  Box,
  Stack,
  Typography,
  IconButton,
  Card,
  Button,
  Divider,
  ButtonGroup,
} from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { useDispatch } from 'react-redux';
import {
  removeProductToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} from '../../redux/cart/actions';

export const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeProductToCart(product.id));
  };

  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantity(product.id));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantity(product.id));
  };

  return (
    <Card variant="outlined">
      <Box display="flex" alignItems="center" p={1} gap={1}>
        <Box component="img" height={90} src={product.src} />
        <Stack spacing={0.5}>
          <Typography fontSize={12} color="text.secondary">
            {product.title}
          </Typography>
          <Typography variant="body2" fontWeight={500}>
            {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
              product.price
            )}
          </Typography>
        </Stack>
        <IconButton
          size="medium"
          onClick={handleRemoveClick}
          sx={{ display: 'flex', border: '1px solid #eeeeee', ml: 'auto' }}
        >
          <CloseRoundedIcon color="error" />
        </IconButton>
      </Box>
      <Divider />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ px: 2, py: 1 }}
      >
        <Typography variant="body2"> Quantidade: {product.quantity}</Typography>
        <ButtonGroup variant="outlined" color="secondary" size="small">
          <Button>
            <AddRoundedIcon fontSize="small" onClick={handleIncreaseClick} />
          </Button>
          <Button>
            <RemoveRoundedIcon fontSize="small" onClick={handleDecreaseClick} />
          </Button>
        </ButtonGroup>
      </Stack>
    </Card>
  );
};

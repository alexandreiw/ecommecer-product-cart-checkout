import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Stack,
  Paper,
  IconButton,
  Typography,
  Button,
  Box,
  Slide,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../redux/cart/actions';

export const ProductItem = ({ product }) => {
  const [isOpenActionsCard, setIsOpenActionsCard] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  const handleClickCard = () => {
    setIsOpenActionsCard((isOpenActionsCard) => !isOpenActionsCard);
  };

  const handleAddProductClick = () => {
    product.quantity = quantity;
    dispatch(addProductToCart(product));
    handleClickCard();
    resetQuantity();
  };

  const resetQuantity = () => {
    setQuantity(1);
  };

  return (
    <Card variant="outlined" ref={containerRef} sx={{ position: 'relative', height: '400px' }}>
      <CardActionArea sx={{ height: '100%' }} onClick={handleClickCard}>
        <CardMedia
          component="img"
          image={product.src}
          sx={{ height: '237px', width: 'auto', mx: 'auto' }}
        />
        <CardContent>
          <Typography color="text.secondary" gutterBottom sx={{ fontSize: 14 }}>
            {product.title}
          </Typography>
          <Typography gutterBottom sx={{ fontSize: 16, fontWeight: [600] }}>
            {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
              product.price
            )}
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: 12 }}>
            {product.formPayment}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Slide direction="up" in={isOpenActionsCard} container={containerRef.current}>
        <Box
          bgcolor="white"
          sx={{
            position: 'absolute',
            left: 0,
            width: '100%',
            borderRadius: 2,
            p: 2,
            bottom: 0,
          }}
        >
          <Typography color="text.secondary" gutterBottom sx={{ fontSize: 14 }}>
            {product.title}
          </Typography>
          <Typography gutterBottom sx={{ fontSize: 16, fontWeight: [600] }}>
            {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
              product.price
            )}
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: 12 }}>
            {product.formPayment}
          </Typography>
          <Stack direction="row" spacing={1} sx={{ width: '100%', my: 2 }}>
            <IconButton variant="outlined" onClick={() => setQuantity(Math.max(quantity - 1, 1))}>
              <RemoveIcon />
            </IconButton>
            <Paper
              variant="outlined"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                py: 1,
              }}
            >
              {quantity}
            </Paper>
            <IconButton variant="outlined" onClick={() => setQuantity(quantity + 1)}>
              <AddIcon />
            </IconButton>
          </Stack>
          <Button variant="contained" fullWidth onClick={handleAddProductClick}>
            adicionar
          </Button>
        </Box>
      </Slide>
    </Card>
  );
};

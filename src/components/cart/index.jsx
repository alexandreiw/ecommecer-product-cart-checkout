import {
  Drawer,
  Box,
  Typography,
  Divider,
  useTheme,
  IconButton,
  Badge,
  Stack,
  useMediaQuery,
} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useState } from 'react';
import { CartItem } from '../cart-item';
import { useSelector } from 'react-redux';
import { selectProductsCount } from '../../redux/cart/cartSelectors';
import { selectProductsTotalPrice } from '../../redux/cart/cartSelectors';

export const Cart = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productsCount = useSelector(selectProductsCount);
  const totalProductPrice = useSelector(selectProductsTotalPrice);

  return (
    <>
      <Box display="flex" justifyContent="flex-end">
        <IconButton size="large" onClick={() => setIsCartOpen(true)}>
          <Badge badgeContent={productsCount} color="error">
            <ShoppingCartOutlinedIcon fontSize="inherit" sx={{ color: '#ffffff' }} />
          </Badge>
        </IconButton>
      </Box>
      <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Box
          width={smDown ? theme.spacing('100vw') : theme.spacing(50)}
          height="auto"
          display="flex"
          flexDirection="column"
        >
          <Box display="flex" alignItems="center" height={theme.spacing(8)} py={6} px={2}>
            <Stack spacing={1}>
              <Typography variant="h6" fontWeight={300}>
                Carrinho
              </Typography>
              <Typography variant="body2" fontWeight={500} color="primary">
                Total: {totalProductPrice}
              </Typography>
            </Stack>
            <IconButton size="medium" onClick={() => setIsCartOpen(false)} sx={{ ml: 'auto' }}>
              <ArrowForwardIosRoundedIcon />
            </IconButton>
          </Box>
          <Divider />
          <Stack spacing={1} p={1}>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

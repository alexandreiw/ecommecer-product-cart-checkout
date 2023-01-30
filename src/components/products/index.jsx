import { Grid } from '@mui/material';
import { products } from '../../data/products';
import { ProductItem } from '../product-item';

export const Products = () => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

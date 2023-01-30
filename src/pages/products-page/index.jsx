import { Container } from '@mui/material';
import { Title, Products, Header, UserForm } from '../../components';

export const ProductsPage = () => {
  return (
    <>
      <Header />
      <Container sx={{ my: 4 }}>
        <Title>Produtos</Title>
        <Products />
        <Title>Dados do cliente</Title>
        <UserForm />
      </Container>
    </>
  );
};

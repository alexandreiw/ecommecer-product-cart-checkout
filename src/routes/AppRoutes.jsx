import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProductsPage, CheckoutPage } from '../pages';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/finalizacao" element={<CheckoutPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

import { AppBar, Toolbar, Box } from '@mui/material';
import { Cart } from '../cart';

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box component="img" height={25} src="/xbrain-logo.png" mr="auto" />
        <Cart />
      </Toolbar>
    </AppBar>
  );
};

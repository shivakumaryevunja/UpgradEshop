import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from '@mui/material';
import { NavLink } from 'react-router-dom';


const buttonColor = {color: 'white'};
const LoginNavbar = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
            
          </IconButton>
          <ShoppingCartIcon /> 
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          upGrad Eshop
          </Typography>
          
          
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
                onClick={gotoPage(item)}
              </Button>
            ))} */}
            <Button style={buttonColor} href='./login' variant='text'>SIGN IN</Button>
            <Button style={buttonColor} className='button' href='./register' variant='text'>SIGN UP</Button>
          </Box>
        </Toolbar>
      </AppBar>
      </Box>
  )
}


export default LoginNavbar
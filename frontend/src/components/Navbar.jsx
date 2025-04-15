import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LogoutIcon from '@mui/icons-material/Logout';
import AxiosInstance from './Axios';

export default function Navbar({ content }) {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const logoutUser = () => {
    AxiosInstance.post(`logoutall/`)
      .then(() => {
        localStorage.removeItem("Token");
        navigate('/');
      })
      .catch((error) => {
        console.error("Logout error:", error);
        alert("Logout failed");
      });
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#f0dbc2', // Light Beige
          color: '#8b0000',           // Deep Maroon Text
          boxShadow: 'none',
          borderBottom: '3px solid #8b0000',
          fontFamily: 'Segoe UI, sans-serif',
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton edge="start" sx={{ display: { sm: 'none' }, color: '#8b0000' }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              CSE-Office (IIT-BHU)
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 2 }}>
            {[
              { label: "Home", to: "/home", icon: <HomeIcon /> },
              { label: "About", to: "/about", icon: <InfoIcon /> },
              { label: "Apply", to: "/apply", icon: <EditNoteIcon /> }
            ].map(({ label, to, icon }) => (
              <Button
                key={label}
                component={Link}
                to={to}
                startIcon={icon}
                sx={{
                  color: '#8b0000',
                  fontWeight: 600,
                  textTransform: 'none',
                  fontFamily: 'Segoe UI, sans-serif',
                  border: path === to ? '2px solid #8b0000' : 'none',
                  borderRadius: path === to ? '8px' : '0',
                  backgroundColor: path === to ? '#fffdf5' : 'transparent',
                  '&:hover': {
                    backgroundColor: '#fffdf5'
                  }
                }}
              >
                {label}
              </Button>
            ))}
            <Button
              onClick={logoutUser}
              startIcon={<LogoutIcon />}
              sx={{
                color: '#8b0000',
                fontWeight: 600,
                textTransform: 'none',
                fontFamily: 'Segoe UI, sans-serif',
                '&:hover': {
                  backgroundColor: '#fffdf5'
                }
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main content with top padding to avoid navbar overlap */}
      <Box
        component="main"
        sx={{
          mt: 8,
          p: 3,
          backgroundColor: '#f7f0d3',
          minHeight: '100vh',
          fontFamily: 'Segoe UI, sans-serif'
        }}
      >
        {content}
      </Box>
    </>
  );
}

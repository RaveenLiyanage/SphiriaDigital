import { Box, Chip, useMediaQuery, createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import CompanyLogo from './../assets/company_logo.jpg';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

let numberofnotifications = 3;

const theme = createTheme(); 

function Header() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      <Box
        sx={{
          height: isMobile ? '100px' : '50px',
          width: isMobile ? '100%' : '15%',
          marginBottom: isMobile ? '1rem' : '0',
          backgroundImage: `url(${CompanyLogo})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      ></Box>
      <Box
        sx={{
          marginTop: isMobile ? '1rem' : '0',
          marginRight: isMobile ? '0' : '2%',
        }}
      >
        <Chip
          label={numberofnotifications}
          icon={<NotificationsNoneIcon />}
          sx={{ backgroundColor: 'white' }}
        />
      </Box>
    </Box>
  );
}

export default Header;

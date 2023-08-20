import { Box, Chip } from '@mui/material';
import React from 'react';
import CompanyLogo from './../assets/company_logo.jpg';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

let numberofnotifications = 3;

function Header() {
  return (
    <Box sx={{width:'100%', height:'10%', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <Box sx={{
        height:'50%',
        width:'15%',
        marginLeft:'2%',
        backgroundImage: `url(${CompanyLogo})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',}}>
      </Box>
      <Box sx={{marginRight:'2%'}}>
        <Chip
          label={numberofnotifications}
          icon={<NotificationsNoneIcon />}
          sx={{backgroundColor:'white'}}
        />
      </Box>
    </Box>
  )
}

export default Header
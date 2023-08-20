import { Box } from '@mui/material';
import React from 'react';
import SideBarButton from './SideBarButton';

function SideBar() {
  return (
    <Box sx={{height:'100%', width:'100%', display:'flex', flexDirection:'column', alignItems:'center',  backgroundColor:'black', borderRadius:'20px'}}>
        <SideBarButton icon={1}/>
        <SideBarButton icon={2}/>
        <SideBarButton icon={3}/>
        <SideBarButton icon={4}/>
        <SideBarButton icon={5}/>
    </Box>
  )
}

export default SideBar
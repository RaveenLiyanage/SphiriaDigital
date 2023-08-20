import { Button, SvgIcon } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ForumIcon from '@mui/icons-material/Forum';
import SettingsIcon from '@mui/icons-material/Settings';
import { hover } from '@testing-library/user-event/dist/hover';

function IconSelector (inputIcon) {
    switch (inputIcon) {
        case 1:
            return (<HomeIcon sx={{color:'white'}}/>);
            break;
        case 2:
            return (<DirectionsCarFilledIcon sx={{color:'white'}} />);
            break;
        case 3:
            return (<BusinessCenterIcon sx={{color:'white'}} />);
            break;
        case 4:
            return (<ForumIcon sx={{color:'white'}} />);
            break;
        case 5:
            return (<SettingsIcon sx={{color:'white'}} />);
            break;
    }

}

function SideBarButton({icon}) {
  return (
    <Button sx={{borderRadius:'30%', border:'none', marginTop:'10%', width:'80%', height:'10%', '&:hover':{border:'1px solid grey', backgroundColor:'#111'}}}>
        {IconSelector(icon)}
    </Button>
  )
}

export default SideBarButton
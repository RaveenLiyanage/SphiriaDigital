import { Box } from '@mui/material'
import React from 'react'

function VehiclePrice({askingPrice}) {
  return (
    <Box sx={{width:'100%', height:'20%'}}>
        <Box >Asking Price</Box>
        <Box sx={{display:'flex'}}>
            <Box >{askingPrice}</Box>
            <Box >USD</Box>
        </Box>
    </Box>
  )
}

export default VehiclePrice
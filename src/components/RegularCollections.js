import { Box } from '@mui/material'
import React from 'react'
import DisplayTable from './DisplayTable'

function RegularCollections() {
  return (
    <Box >
        <Box >Regular Collection</Box>
        <Box sx={{marginRight:'2%'}}>
          <DisplayTable />
        </Box>
    </Box>
  )
}

export default RegularCollections
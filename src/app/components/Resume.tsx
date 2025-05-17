import React from 'react'
import { Box, Typography} from '@mui/material'
const Resume = () => {
  return (
    <Box sx={{
        mt:3,
    }}>
         <Typography
        sx={{
          fontFamily: 'Hack, monospace',
          fontWeight: 'bold',
          mb: 2,
        }}
      >
        My Resume:
      </Typography>

        <iframe  src="/HaziqSaleemCV.pdf"
        width="100%"
        height="600px"
        style={{
          border: '2px solid #64b5f6',
          borderRadius: '8px', 
          }}/>
    </Box>
  )
}

export default Resume
import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactMe = () => {
  return (
    <Box
  id="contact"
  sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    py: 8,
    px: 2,
    textAlign: 'center',
  }}
>
  <Typography sx={{fontFamily: 'Hack, monospace'}} variant="h4" gutterBottom>
    Lets Connect
  </Typography>
  <Typography  variant="subtitle1" sx={{ maxWidth: 600, mb: 4, fontFamily: 'Hack, monospace'}}>
    I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
  </Typography>

  {/* Email */}
  <Typography  variant="body1" sx={{ mb: 2, fontFamily: 'Hack, monospace' }}>
    <a href="mailto:khaziq109@gmail.com" style={{ color: 'inherit', textDecoration: 'none',fontFamily: 'Hack, monospace' }}>
    khaziq109@gmail.com
    </a>
  </Typography>

  {/* Icons */}
  <Box>
    <IconButton href="https://github.com/Hazziiqq" target="_blank" color="inherit">
      <GitHubIcon fontSize="large" />
    </IconButton>
    <IconButton href="https://www.linkedin.com/in/haziq-saleem-934655270/" target="_blank" color="inherit">
      <LinkedInIcon fontSize="large" />
    </IconButton>
  </Box>
</Box>

  )
}

export default ContactMe
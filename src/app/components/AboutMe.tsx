import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'

const AboutMe = () => {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Box sx={{ maxWidth: '60%' }}>
        <Typography variant="h5" sx={{ fontFamily: 'Hack, monospace', fontWeight: 'bold' }}>
          Hey there! My name is <strong>Haziq Saleem</strong>. I am a Computer Science student at <strong>Institute of Management Sciences Peshawar</strong>.
        </Typography>
        <Typography sx={{ fontFamily: 'Hack, monospace', mt: 2 }}>
          Currently studying in my <strong>6th semester</strong>, I specialize in building user-friendly interfaces using <strong>HTML</strong>, <strong>CSS</strong>, <strong>React</strong>, and <strong>Next.js</strong>. 
          I am constantly exploring new tools and technologies to improve my craft and deliver seamless digital experiences.
        </Typography>

        <Typography sx={{ fontFamily: 'Hack, monospace', mt: 5 }}>
          Hope you enjoy visiting my Portfolio. Feel free to scroll through the directories and learn more about me :)
        </Typography>
      </Box>
      
      <Box>
        <Image
          alt="Haziq's Profile Picture"
          src="/pfp1.jpg"
          width={300}
          height={300}
          style={{ 
            borderRadius: '10px',
            marginRight: 50
           }} 
        />
      </Box>
    </Box>
  );
}

export default AboutMe;

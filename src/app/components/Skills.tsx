import { Box,Typography} from '@mui/material'
import React from 'react'


const Skills = () => {
    const skills = ['Frontend Development', 'Nextjs' , 'Reactjs', 'MUI', 'Tailwind CSS', 'HTML']
  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
    }}>
        {skills.map((skill, index) => (
            <Typography 
            sx={{
                fontFamily: 'Hack, monospace'
            }}  
            key={index}>
                - {skill}
            </Typography>
        ))}
        
    </Box>
  )
}

export default Skills
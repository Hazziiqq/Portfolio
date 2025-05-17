'use client';

import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: 'Quotifier',
      description: 'A Next.js project where you can find a quote with a specific word in it and can add to favorites.',
      image: '/quote.jpg',
    },
    {
      title: 'SignaturePad',
      description: 'A React.js project where you can sign and download it in JPG, PNG, and PDF format.',
      image: '/signature.webp',
    },
    {
      title: 'MoodMusic',
      description: 'A Reactjs project designed to suggest songs on the basis of mood that the user selected i.e Happy,Sad and Excited.',
      image: '/music.webp',
    },
  ];

  return (
    <Box sx={{ 
        paddingTop: 2, 
        textAlign: 'center',
         }}>
            
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Typography variant="subtitle1" sx={{ marginBottom: 4 }}>
        Here are some of the projects I have made using reactjs and nextjs
      </Typography>

      <Box display="flex" justifyContent="center" gap={4} flexWrap="wrap">
        {projects.map((project, index) => (
          <Card key={index} sx={{ 
            width: 300, 
            borderRadius: 2, 
            overflow: 'hidden', 
            boxShadow: 2 }}>
            <Image
              src={project.image}
              alt={project.title}
              width={300}
              height={200}
              style={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ fontFamily: 'Hack, monospace', color: 'white !important' }}>
                <Typography variant="h6" sx={{ fontFamily: 'Hack, monospace' }} gutterBottom>
                    <strong>{project.title}</strong></Typography>
                    <Typography variant="body2" sx={{ fontFamily: 'Hack, monospace' }}>
                         {project.description}</Typography>
                         </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

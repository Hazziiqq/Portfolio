"use client"
import { Box, Typography } from "@mui/material";
import { JSX, useState } from "react";
import TerminalHeader from "./components/TerminalHeader";
import TerminalPrompt from "./components/TerminalPrompt";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

export default function Home() {
  const [output, setOutput] = useState<JSX.Element | null>(null);

  const commandHandler = (command: string) => {
    const trimmedCom = command.trim().toLowerCase();
  
    const sharedTextStyle = {
      fontFamily: 'Hack, monospace',
      fontWeight: 'bold',
    };
  
    if (trimmedCom === 'help') {
      setOutput(
        <Box>
          <Typography sx={sharedTextStyle}>Available Commands:</Typography>
          <Typography sx={sharedTextStyle}>ls - List available directories</Typography>
          <Typography sx={sharedTextStyle}>cd &lt;directory&gt; - Change directories</Typography>
        </Box>
      );
    } 
    else if (trimmedCom === 'ls') {
      const directories = ['AboutMe', 'Skills', 'Projects', 'Resume', 'ContactMe'];
  
      setOutput(
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            flexWrap: 'wrap',
            color: 'blue',
          }}
        >
          {directories.map((dir) => (
            <Typography key={dir} sx={sharedTextStyle}>
              {dir}
            </Typography>
          ))}
        </Box>
      );
    } 
    else if(trimmedCom.startsWith('cd')){
      const directory = trimmedCom.slice(3)
      switch (directory) {
        case 'aboutme':
          setOutput(<AboutMe/>)
          break;

        case 'resume':
          setOutput(<Resume/>)
          break;  

        case 'skills':
          setOutput(<Skills/>)
          break;
          
        case 'projects':
          setOutput(<Projects/>)
          break;

        case 'contactme':
          setOutput(<ContactMe/>)
          break;
      }
    }
    else {
      setOutput(
        <Typography sx={sharedTextStyle}>
          Command not found. Type <strong>help</strong> to see available commands.
        </Typography>
      );
    }
  };
  
  return (
    <Box sx={{
      position: 'relative',
      minHeight: '100vh',
      backgroundImage: 'url(/kali2.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      fontFamily: 'Hack',
      color: 'white !important',
    }}>
      {/* OVERLAY */}
      <Box sx={{
        position: 'absolute',
        inset: '0',
        backgroundColor: 'rgba(0,0,0,0.5)', 
        zIndex: 1,
      }} />
      <TerminalHeader/>
      
      <Box sx={{ position: 'relative', zIndex: 2, padding: '2rem' }}>
        <h1 style={{marginTop:30}}>Welcome to My Terminal Portfolio</h1>
        <p>Feel free to explore my work through the terminal interface.</p>
        <TerminalPrompt onCommandSubmit={commandHandler}/>
        <Box mt={3}>{output}</Box>
      </Box>
    </Box>
  );
}


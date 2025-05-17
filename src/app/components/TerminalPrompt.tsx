'use client';

import { Box,InputBase } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

interface TerminalPromptProps{
    onCommandSubmit: (command: string) => void
}

const TerminalPrompt = ({onCommandSubmit}: TerminalPromptProps) => {
    const [onCommand, setOnCommand] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputRef.current?.focus()
    },[])

const onEnter = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter'){
        onCommandSubmit(onCommand);
        setOnCommand('')
    }
}
  return (
    <Box sx={{
        color: '#64b5f6',
        mt:5,
        
    }}>
        HaziqsPortfolio@kali:~$
        <InputBase
        inputRef={inputRef}
        value={onCommand}
        placeholder='enter command..'
        onChange={(e) => setOnCommand(e.target.value)}
        onKeyDown={onEnter}
        sx={{
            color: 'white !important',
            ml: 1,
            fontFamily: 'Hack'
        }}
        />
    </Box>
  );
};

export default TerminalPrompt;

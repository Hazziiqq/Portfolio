import { Box, Button } from "@mui/material";

const TerminalHeader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        width: '100%',
        padding: '0.3rem 1rem',
        zIndex: 2,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
        fontFamily: 'Hack',
        color: 'white',
        height: '2.5rem', 
      }}
    >
      {/* Left Side - Menu */}
      <Box sx={{ display: 'flex', gap: '0.6rem' }}> 
        {['File', 'Actions', 'Edit', 'View', 'Help'].map(label => (
          <Button key={label} 
          sx={{ 
            color: 'white', 
            fontSize: '0.85rem', 
            padding: '0 0.5rem', 
            minWidth: 'auto' }}>
            {label}
          </Button>
        ))}
      </Box>

      {/* Right Side - Icons */}
      <Box sx={{ display: 'flex', gap: '0.6rem' }}>
        {['_', '□', 'X'].map((symbol, i) => (
          <Button key={i} 
          sx={{ 
            color: 'white',
            fontSize: '1.1rem', 
            minWidth: 'auto', 
            padding: '0 0.4rem' }}>
            {symbol}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default TerminalHeader;

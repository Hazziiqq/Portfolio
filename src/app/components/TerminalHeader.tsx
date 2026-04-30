import { Box, Button } from "@mui/material";

const TerminalHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        zIndex: 3,
        width: "100%",
        padding: "0.3rem 1rem",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
        fontFamily: "'Hack', monospace",
        color: "white",
        height: "2.5rem",
        flexShrink: 0,
      }}
    >
      {/* Window controls */}
      <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
        {[
          { color: "#ef5350" },
          { color: "#ffa726" },
          { color: "#66bb6a" },
        ].map(({ color }, i) => (
          <Box
            key={i}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: color,
              cursor: "pointer",
              transition: "opacity 0.2s",
              "&:hover": { opacity: 0.7 },
            }}
          />
        ))}
        <Box
          component="span"
          sx={{ ml: 1, fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}
        >
          haziq@portfolio: ~
        </Box>
      </Box>

      {/* Menu items */}
      <Box
        className="terminal-header-menu"
        sx={{ display: "flex", gap: "0.4rem" }}
      >
        {["File", "Edit", "View", "Help"].map((label) => (
          <Button
            key={label}
            sx={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.75rem",
              padding: "0 0.4rem",
              minWidth: "auto",
              textTransform: "none",
              "&:hover": {
                color: "white",
                background: "rgba(255,255,255,0.08)",
              },
            }}
          >
            {label}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default TerminalHeader;

import { Box, Typography } from "@mui/material";

const mono = { fontFamily: "'Hack', monospace" };

const ASCII_ART = `    /\\
   /  \\
  / /\\ \\
 / ____ \\
/_/    \\_\\`;

const info = [
  { label: "OS", value: "Portfolio Linux x86_64" },
  { label: "Host", value: "Next.js 15.3.1" },
  { label: "Uptime", value: "Graduated" },
  { label: "Shell", value: "terminal-portfolio v1.0" },
  { label: "Languages", value: "TypeScript, JavaScript, HTML, CSS" },
  { label: "Frameworks", value: "React, Next.js, React Native" },
  { label: "Styling", value: "Tailwind CSS, MUI, Styled Components" },
  { label: "Tools", value: "Git, VS Code, Figma" },
  { label: "University", value: "IMSciences Peshawar" },
  { label: "Contact", value: "khaziq109@gmail.com" },
];

const colorBlocks = ["#ef5350", "#ffa726", "#66bb6a", "#42a5f5", "#ab47bc", "#26c6da", "#e0e0e0", "#78909c"];

const Neofetch = () => {
  return (
    <Box
      className="neofetch-container section-content"
      sx={{
        display: "flex",
        gap: 4,
        mt: 2,
        alignItems: "flex-start",
      }}
    >
      {/* ASCII art */}
      <Box className="neofetch-ascii">
        <pre
          style={{
            ...mono,
            fontSize: "0.75rem",
            color: "#64b5f6",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {ASCII_ART}
        </pre>
      </Box>

      {/* Info */}
      <Box>
        <Typography sx={{ ...mono, fontWeight: "bold", color: "#64b5f6", fontSize: "0.85rem" }}>
          haziq@portfolio
        </Typography>
        <Typography sx={{ ...mono, fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", mb: 0.5 }}>
          ─────────────────────
        </Typography>

        {info.map((item) => (
          <Typography key={item.label} sx={{ ...mono, fontSize: "0.8rem", lineHeight: 1.7 }}>
            <span style={{ color: "#64b5f6", fontWeight: "bold" }}>
              {item.label}
            </span>
            <span style={{ color: "#90a4ae" }}>{": "}</span>
            <span>{item.value}</span>
          </Typography>
        ))}

        {/* Color blocks */}
        <Box sx={{ display: "flex", gap: 0, mt: 1.5 }}>
          {colorBlocks.map((c, i) => (
            <Box
              key={i}
              sx={{
                width: 16,
                height: 16,
                backgroundColor: c,
                borderRadius: i === 0 ? "2px 0 0 2px" : i === colorBlocks.length - 1 ? "0 2px 2px 0" : 0,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Neofetch;

import { Box, Typography, Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const mono = { fontFamily: "'Hack', monospace" };

const Resume = () => {
  return (
    <Box className="section-content" sx={{ mt: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1.5,
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{ ...mono, fontWeight: "bold", color: "#64b5f6" }}
        >
          ~/Resume
        </Typography>
        <Button
          component="a"
          href="/HaziqSaleemCV.pdf"
          download="HaziqSaleem_Resume.pdf"
          startIcon={<DownloadIcon />}
          sx={{
            ...mono,
            fontSize: "0.75rem",
            textTransform: "none",
            color: "#64b5f6",
            border: "1px solid rgba(100,181,246,0.3)",
            borderRadius: "6px",
            padding: "4px 12px",
            "&:hover": {
              backgroundColor: "rgba(100,181,246,0.1)",
              border: "1px solid rgba(100,181,246,0.5)",
            },
          }}
        >
          Download PDF
        </Button>
      </Box>

      <Box
        sx={{
          border: "1px solid rgba(100,181,246,0.25)",
          borderRadius: "8px",
          overflow: "hidden",
          backgroundColor: "rgba(255,255,255,0.02)",
        }}
      >
        <iframe
          src="/HaziqSaleemCV.pdf"
          width="100%"
          height="550px"
          style={{ border: "none", display: "block" }}
          title="Resume"
        />
      </Box>

      <Typography
        sx={{ ...mono, fontSize: "0.75rem", color: "#90a4ae", mt: 1 }}
      >
        Having trouble viewing? Click the download button above.
      </Typography>
    </Box>
  );
};

export default Resume;
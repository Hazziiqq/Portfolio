import { Box, Typography } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";

const mono = { fontFamily: "'Hack', monospace" };

const timeline = [
  {
    period: "2022 — 2026",
    title: "BS Computer Science",
    subtitle: "Institute of Management Sciences, Peshawar",
    description:
      "Focused on frontend development, data structures, and software engineering.",
    icon: <SchoolIcon sx={{ fontSize: 18 }} />,
    color: "#64b5f6",
  },
  {
    period: "2024 — Present",
    title: "Frontend Developer (Self-taught)",
    subtitle: "Freelance / Personal Projects",
    description:
      "Building web applications using React, Next.js, and React Native. Developed projects like Quotifier, SignaturePad, MoodMusic, and a full POS system with Electron.",
    icon: <CodeIcon sx={{ fontSize: 18 }} />,
    color: "#66bb6a",
  },
  {
    period: "2020 — 2022",
    title: "FSc Pre-Medical",
    subtitle: "Edwardes College Peshawar",
    icon: <SchoolIcon sx={{ fontSize: 18 }} />,
    color: "#ffa726",
  },
];

const Experience = () => {
  return (
    <Box className="section-content" sx={{ mt: 2 }}>
      <Typography
        variant="h6"
        sx={{ ...mono, fontWeight: "bold", color: "#64b5f6", mb: 2 }}
      >
        ~/Experience
      </Typography>

      <Box className="experience-timeline" sx={{ pl: 3, borderLeft: "2px solid rgba(255,255,255,0.1)" }}>
        {timeline.map((item, i) => (
          <Box
            key={i}
            sx={{
              position: "relative",
              mb: i < timeline.length - 1 ? 3 : 0,
              pl: 2.5,
            }}
          >
            {/* Dot on timeline */}
            <Box
              sx={{
                position: "absolute",
                left: -14.5,
                top: 2,
                width: 26,
                height: 26,
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.7)",
                border: `2px solid ${item.color}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: item.color,
              }}
            >
              {item.icon}
            </Box>

            <Typography
              sx={{
                ...mono,
                fontSize: "0.75rem",
                color: item.color,
                fontWeight: "bold",
              }}
            >
              {item.period}
            </Typography>
            <Typography
              sx={{ ...mono, fontSize: "0.9rem", fontWeight: "bold", mt: 0.3 }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{ ...mono, fontSize: "0.8rem", color: "#90a4ae" }}
            >
              {item.subtitle}
            </Typography>
            <Typography
              sx={{
                ...mono,
                fontSize: "0.8rem",
                color: "#b0bec5",
                mt: 0.5,
                lineHeight: 1.6,
              }}
            >
              {item.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;

import { Box, Typography } from "@mui/material";
import Image from "next/image";

const mono = { fontFamily: "'Hack', monospace" };

const AboutMe = () => {
  return (
    <Box
      className="about-container section-content"
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        mt: 2,
        gap: 3,
      }}
    >
      <Box className="about-text" sx={{ maxWidth: "65%" }}>
        <Typography
          variant="h6"
          sx={{ ...mono, fontWeight: "bold", color: "#64b5f6", mb: 1 }}
        >
          ~/AboutMe
        </Typography>
        <Typography sx={{ ...mono, fontSize: "0.9rem", lineHeight: 1.7 }}>
          Hey there! I&apos;m <strong>Haziq Saleem</strong>, a Computer Science <strong>Graduate </strong>
          from{" "}
          <strong>Institute of Management Sciences, Peshawar</strong>, I spend most of my time building
          things for the web.
        </Typography>
        <Typography
          sx={{ ...mono, fontSize: "0.9rem", mt: 2, lineHeight: 1.7 }}
        >
          I specialize in frontend development — working with{" "}
          <span style={{ color: "#61dafb" }}>React</span>,{" "}
          <span style={{ color: "#ffffff" }}>Next.js</span>,{" "}
          <span style={{ color: "#38bdf8" }}>Tailwind CSS</span>, and{" "}
          <span style={{ color: "#7c4dff" }}>Material UI</span>. I&apos;m always
          picking up new tools and trying to get better at what I do.
        </Typography>
        <Typography
          sx={{ ...mono, fontSize: "0.85rem", mt: 2, color: "#90a4ae" }}
        >
          When I&apos;m not coding, you&apos;ll find me exploring new tech,
          watching tutorials, or working on side projects to sharpen my skills.
        </Typography>
      </Box>

      <Box className="about-image" sx={{ flexShrink: 0, mr: { xs: 0, md: 4 } }}>
        <Image
          alt="Haziq Saleem"
          src="/pfp1.jpg"
          width={220}
          height={220}
          style={{
            borderRadius: "8px",
            border: "2px solid rgba(100, 181, 246, 0.3)",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};

export default AboutMe;

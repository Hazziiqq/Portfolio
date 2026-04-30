"use client";

import { Box, Typography, Chip } from "@mui/material";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const mono = { fontFamily: "'Hack', monospace" };

const projects = [
  {
    title: "Quotifier",
    description:
      "Search for quotes by keyword, save favorites, and browse curated collections. Built with Next.js and styled with a clean minimal UI.",
    image: "/quote.jpg",
    tech: ["Next.js", "React", "CSS"],
    github: "https://github.com/Hazziiqq",
    live: "#",
  },
  {
    title: "SignaturePad",
    description:
      "Draw your signature on a canvas and export it in JPG, PNG, or PDF format. Supports touch and stylus input.",
    image: "/signature.webp",
    tech: ["React", "Canvas API", "FileSaver"],
    github: "https://github.com/Hazziiqq",
    live: "#",
  },
  {
    title: "MoodMusic",
    description:
      "Select your current mood and get personalized song suggestions. Features categories like Happy, Sad, and Excited.",
    image: "/music.webp",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/Hazziiqq",
    live: "#",
  },
];

export default function Projects() {
  return (
    <Box className="section-content" sx={{ mt: 2 }}>
      <Typography
        variant="h6"
        sx={{ ...mono, fontWeight: "bold", color: "#64b5f6", mb: 0.5 }}
      >
        ~/Projects
      </Typography>
      <Typography sx={{ ...mono, fontSize: "0.85rem", color: "#90a4ae", mb: 2 }}>
        Some things I&apos;ve built with React and Next.js
      </Typography>

      <Box
        className="projects-grid"
        sx={{ display: "flex", gap: 2.5, flexWrap: "wrap" }}
      >
        {projects.map((p, i) => (
          <Box
            key={i}
            className="project-card"
            sx={{
              width: { xs: "100%", sm: 280 },
              borderRadius: "8px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.1)",
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          >
            <Image
              src={p.image}
              alt={p.title}
              width={280}
              height={170}
              style={{ objectFit: "cover", width: "100%", height: 170 }}
            />
            <Box sx={{ padding: "0.8rem" }}>
              <Typography
                sx={{ ...mono, fontWeight: "bold", fontSize: "0.95rem", mb: 0.5 }}
              >
                {p.title}
              </Typography>
              <Typography
                sx={{
                  ...mono,
                  fontSize: "0.78rem",
                  color: "#b0bec5",
                  lineHeight: 1.5,
                  mb: 1,
                }}
              >
                {p.description}
              </Typography>

              {/* Tech tags */}
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1.2 }}>
                {p.tech.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{
                      ...mono,
                      fontSize: "0.65rem",
                      height: 20,
                      backgroundColor: "rgba(100,181,246,0.15)",
                      color: "#64b5f6",
                      border: "1px solid rgba(100,181,246,0.25)",
                    }}
                  />
                ))}
              </Box>

              {/* Links */}
              <Box sx={{ display: "flex", gap: 1.5 }}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: "#90a4ae",
                    fontSize: "0.78rem",
                    fontFamily: "'Hack', monospace",
                    textDecoration: "none",
                  }}
                >
                  <GitHubIcon sx={{ fontSize: 14 }} /> Code
                </a>
                {p.live !== "#" && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      color: "#90a4ae",
                      fontSize: "0.78rem",
                      fontFamily: "'Hack', monospace",
                      textDecoration: "none",
                    }}
                  >
                    <LaunchIcon sx={{ fontSize: 14 }} /> Live
                  </a>
                )}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

"use client";

import { Box, Typography } from "@mui/material";

const mono = { fontFamily: "'Hack', monospace" };

interface SkillCategory {
  name: string;
  color: string;
  skills: { name: string; level: number }[];
}

const categories: SkillCategory[] = [
  {
    name: "Frontend",
    color: "#64b5f6",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "JavaScript", level: 85 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    name: "Styling & UI",
    color: "#ce93d8",
    skills: [
      { name: "Tailwind CSS", level: 80 },
      { name: "Material UI", level: 75 },
      { name: "Responsive Design", level: 80 },
    ],
  },
  {
    name: "Tools & Other",
    color: "#66bb6a",
    skills: [
      { name: "Git / GitHub", level: 65 },
      { name: "VS Code", level: 85 },
      { name: "Linux", level: 87 },
      { name: "Figma", level: 40 },
    ],
  },
];

const Skills = () => {
  return (
    <Box className="section-content" sx={{ mt: 2 }}>
      <Typography
        variant="h6"
        sx={{ ...mono, fontWeight: "bold", color: "#64b5f6", mb: 2 }}
      >
        ~/Skills
      </Typography>

      <Box
        className="skills-grid"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          gap: 3,
        }}
      >
        {categories.map((cat) => (
          <Box key={cat.name}>
            <Typography
              sx={{
                ...mono,
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: cat.color,
                mb: 1,
              }}
            >
              ▸ {cat.name}
            </Typography>
            {cat.skills.map((skill) => (
              <Box key={skill.name} sx={{ mb: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 0.3,
                  }}
                >
                  <Typography sx={{ ...mono, fontSize: "0.8rem" }}>
                    {skill.name}
                  </Typography>
                  <Typography
                    sx={{ ...mono, fontSize: "0.75rem", color: "#90a4ae" }}
                  >
                    {skill.level}%
                  </Typography>
                </Box>
                <Box
                  sx={{
                    height: 6,
                    backgroundColor: "rgba(255,255,255,0.08)",
                    borderRadius: 3,
                    overflow: "hidden",
                  }}
                >
                  <Box
                    className="skill-bar-fill"
                    sx={{
                      height: "100%",
                      width: `${skill.level}%`,
                      backgroundColor: cat.color,
                      borderRadius: 3,
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
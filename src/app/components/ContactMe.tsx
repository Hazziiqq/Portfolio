import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const mono = { fontFamily: "'Hack', monospace" };

const socials = [
  {
    icon: <EmailIcon />,
    label: "khaziq109@gmail.com",
    href: "mailto:khaziq109@gmail.com",
    color: "#ef5350",
  },
  {
    icon: <GitHubIcon />,
    label: "github.com/Hazziiqq",
    href: "https://github.com/Hazziiqq",
    color: "#e0e0e0",
  },
  {
    icon: <LinkedInIcon />,
    label: "linkedin.com/in/haziq-saleem",
    href: "https://www.linkedin.com/in/haziq-saleem-934655270/",
    color: "#42a5f5",
  },
];

const ContactMe = () => {
  return (
    <Box className="section-content" sx={{ mt: 2 }}>
      <Typography
        variant="h6"
        sx={{ ...mono, fontWeight: "bold", color: "#64b5f6", mb: 1 }}
      >
        ~/ContactMe
      </Typography>
      <Typography
        sx={{ ...mono, fontSize: "0.85rem", color: "#90a4ae", mb: 2 }}
      >
        Open to new projects, collaborations, and ideas. Let&apos;s talk.
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {socials.map((s) => (
          <Box
            key={s.label}
            component="a"
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              textDecoration: "none",
              color: "inherit",
              padding: "0.5rem 0.8rem",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.08)",
              transition: "all 0.2s ease",
              maxWidth: 400,
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.05)",
                border: `1px solid ${s.color}40`,
                transform: "translateX(4px)",
              },
            }}
          >
            <IconButton
              size="small"
              sx={{ color: s.color, padding: "4px" }}
              disableRipple
            >
              {s.icon}
            </IconButton>
            <Typography sx={{ ...mono, fontSize: "0.85rem" }}>
              {s.label}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography
        sx={{ ...mono, fontSize: "0.8rem", color: "#90a4ae", mt: 3 }}
      >
        ~ response time: usually within 24 hours
      </Typography>
    </Box>
  );
};

export default ContactMe;
"use client";

import { Box, Typography } from "@mui/material";
import { useState, useEffect, useRef, useCallback } from "react";
import TerminalHeader from "./components/TerminalHeader";
import TerminalPrompt from "./components/TerminalPrompt";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Neofetch from "./components/Neofetch";
import Experience from "./components/Experience";

interface Entry {
  id: number;
  command: string;
  output: string;
}

const BOOT = [
  "[    0.000000] Linux version 6.5.0-kali (haziq@portfolio)",
  "[    0.000002] BIOS-e820: [mem 0x00000000-0x0009ffff] usable",
  "[    0.000005] Kernel command line: BOOT_IMAGE=/vmlinuz root=/dev/sda1",
  "[    0.000008] Loading kernel modules... done.",
  "[    0.000012] Mounting /home/haziq/portfolio... done.",
  "[    0.000015] Starting network interfaces... eth0: link up",
  "[    0.000019] Initializing display server... done.",
  "[    0.000022] Starting terminal-portfolio.service... done.",
  "",
];

const ASCII_NAME = [
  "  _               _        ",
  " | |__   __ _ ___(_) __ _  ",
  " | '_ \\ / _` |_  / |/ _` | ",
  " | | | | (_| |/ /| | (_| | ",
  " |_| |_|\\__,_/___|_|\\__, | ",
  "                        |_| ",
].join("\n");

const mono = { fontFamily: "'Hack', monospace" };

export default function Home() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [booting, setBooting] = useState(true);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [ready, setReady] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const nextId = useRef(0);

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      if (i < BOOT.length) {
        setBootLines((p) => [...p, BOOT[i]]);
        i++;
      } else {
        clearInterval(iv);
        setTimeout(() => {
          setBooting(false);
          setReady(true);
        }, 400);
      }
    }, 140);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [entries, bootLines, ready]);

  const focusInput = useCallback(() => {
    const el = document.querySelector<HTMLInputElement>(
      "#terminal-input input"
    );
    el?.focus();
  }, []);

  const handleCommand = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const id = nextId.current++;
    setCmdHistory((p) => [...p, raw]);

    if (cmd === "clear") {
      setEntries([]);
      return;
    }

    let out = "unknown";
    if (cmd === "help") out = "help";
    else if (cmd === "ls") out = "ls";
    else if (cmd === "whoami") out = "whoami";
    else if (cmd === "neofetch") out = "neofetch";
    else if (cmd === "history") out = "history";
    else if (cmd === "pwd") out = "pwd";
    else if (cmd === "date") out = "date";
    else if (cmd === "exit") out = "exit";
    else if (cmd.startsWith("cd ")) {
      const dir = cmd.slice(3).trim();
      const valid: Record<string, string> = {
        aboutme: "aboutme",
        skills: "skills",
        projects: "projects",
        resume: "resume",
        contactme: "contactme",
        experience: "experience",
      };
      out = valid[dir] || "bad-dir";
    } else if (cmd.startsWith("sudo")) out = "sudo";
    else if (cmd.startsWith("cat")) out = "cat";
    else if (cmd === "rm -rf /") out = "rm";

    setEntries((p) => [...p, { id, command: raw, output: out }]);
  };

  const renderOutput = (e: Entry) => {
    switch (e.output) {
      case "help":
        return (
          <Box className="section-content" sx={{ mt: 1 }}>
            <Typography sx={{ ...mono, color: "#ffa726", fontWeight: "bold" }}>
              Available Commands:
            </Typography>
            {[
              ["help", "Show this help message"],
              ["ls", "List available directories"],
              ["cd <dir>", "Navigate to a directory"],
              ["clear", "Clear the terminal"],
              ["whoami", "Quick introduction"],
              ["neofetch", "Display system information"],
              ["history", "Show command history"],
              ["pwd", "Print working directory"],
              ["date", "Show current date"],
            ].map(([c, d]) => (
              <Typography key={c} sx={{ ...mono, fontSize: "0.85rem" }}>
                <span
                  style={{
                    color: "#66bb6a",
                    display: "inline-block",
                    width: 160,
                  }}
                >
                  {c}
                </span>
                <span style={{ color: "#90a4ae" }}>{d}</span>
              </Typography>
            ))}
            <Typography
              sx={{ ...mono, fontSize: "0.8rem", mt: 1, color: "#90a4ae" }}
            >
              Tip: Use ↑/↓ arrows for history, Tab for autocomplete
            </Typography>
          </Box>
        );

      case "ls":
        return (
          <Box
            className="section-content"
            sx={{ display: "flex", gap: 3, flexWrap: "wrap", mt: 1 }}
          >
            {[
              "AboutMe",
              "Skills",
              "Projects",
              "Resume",
              "Experience",
              "ContactMe",
            ].map((d) => (
              <Typography
                key={d}
                sx={{ ...mono, color: "#64b5f6", fontWeight: "bold" }}
              >
                📁 {d}/
              </Typography>
            ))}
          </Box>
        );

      case "whoami":
        return (
          <Box className="section-content" sx={{ mt: 1 }}>
            <Typography sx={mono}>
              Haziq Saleem — CS Graduate from IMSciences Peshawar.
            </Typography>
            <Typography sx={{ ...mono, color: "#90a4ae" }}>
              Frontend developer working with React & Next.js.
            </Typography>
          </Box>
        );

      case "neofetch":
        return <Neofetch />;
      case "aboutme":
        return <AboutMe />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "resume":
        return <Resume />;
      case "contactme":
        return <ContactMe />;
      case "experience":
        return <Experience />;

      case "history":
        return (
          <Box className="section-content" sx={{ mt: 1 }}>
            {cmdHistory.map((c, i) => (
              <Typography key={i} sx={{ ...mono, fontSize: "0.85rem" }}>
                <span style={{ color: "#90a4ae", marginRight: 12 }}>
                  {i + 1}
                </span>
                {c}
              </Typography>
            ))}
          </Box>
        );

      case "pwd":
        return (
          <Typography sx={{ ...mono, mt: 0.5 }}>
            /home/haziq/portfolio
          </Typography>
        );
      case "date":
        return (
          <Typography sx={{ ...mono, mt: 0.5 }}>
            {new Date().toString()}
          </Typography>
        );
      case "exit":
        return (
          <Typography sx={{ ...mono, mt: 0.5 }}>
            logout — Just kidding, you can&apos;t leave that easily.
          </Typography>
        );
      case "sudo":
        return (
          <Typography sx={{ ...mono, color: "#ffa726", mt: 0.5 }}>
            Nice try! You don&apos;t have root access here.
          </Typography>
        );
      case "rm":
        return (
          <Typography sx={{ ...mono, color: "#ef5350", mt: 0.5 }}>
            Permission denied. The portfolio is protected.
          </Typography>
        );
      case "cat":
        return (
          <Typography sx={{ ...mono, color: "#90a4ae", mt: 0.5 }}>
            Try &apos;cd&apos; to navigate into directories instead.
          </Typography>
        );
      case "bad-dir":
        return (
          <Typography sx={{ ...mono, color: "#ef5350", mt: 0.5 }}>
            bash: cd: no such directory. Type &apos;ls&apos; to see available
            directories.
          </Typography>
        );
      default:
        return (
          <Typography sx={{ ...mono, color: "#ef5350", mt: 0.5 }}>
            Command not found: {e.command.trim()}. Type &apos;help&apos; for
            available commands.
          </Typography>
        );
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: "url(/kali2.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      />

      <Box sx={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }}>
        <TerminalHeader />

        <Box
          ref={bodyRef}
          onClick={focusInput}
          sx={{
            flex: 1,
            overflowY: "auto",
            padding: { xs: "1rem", md: "1rem 1.5rem" },
            paddingTop: "1rem",
            color: "white",
            cursor: "text",
          }}
        >
          {/* Boot sequence */}
          {booting &&
            bootLines.map((line, i) => (
              <Typography
                key={i}
                className="boot-line"
                sx={{
                  ...mono,
                  fontSize: "0.8rem",
                  color: line === "" ? "transparent" : "#66bb6a",
                  lineHeight: 1.6,
                }}
              >
                {line || "\u00A0"}
              </Typography>
            ))}

          {/* Welcome */}
          {ready && (
            <Box className="section-content" sx={{ mb: 2 }}>
              <pre
                style={{
                  fontFamily: "'Hack', monospace",
                  fontSize: "0.7rem",
                  color: "#64b5f6",
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                {ASCII_NAME}
              </pre>
              <Typography sx={{ ...mono, fontSize: "0.9rem", mt: 1 }}>
                Welcome to my terminal portfolio.
              </Typography>
              <Typography sx={{ ...mono, fontSize: "0.85rem", color: "#90a4ae" }}>
                Type{" "}
                <span style={{ color: "#66bb6a" }}>help</span> to see
                available commands, or{" "}
                <span style={{ color: "#66bb6a" }}>ls</span> to browse
                directories.
              </Typography>
              <Box
                sx={{
                  mt: 1.5,
                  mb: 1,
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                }}
              />
            </Box>
          )}

          {/* Entries */}
          {ready &&
            entries.map((entry) => (
              <Box key={entry.id} className="terminal-entry" sx={{ mb: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <span
                    style={{
                      color: "#64b5f6",
                      fontFamily: "'Hack', monospace",
                      whiteSpace: "nowrap",
                      fontSize: "0.9rem",
                    }}
                  >
                    haziq@portfolio:~$
                  </span>
                  <Typography sx={{ ...mono, ml: 1, fontSize: "0.9rem" }}>
                    {entry.command}
                  </Typography>
                </Box>
                {renderOutput(entry)}
              </Box>
            ))}

          {/* Prompt */}
          {ready && (
            <TerminalPrompt
              onCommandSubmit={handleCommand}
              commandHistory={cmdHistory}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

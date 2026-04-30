"use client";

import { Box, InputBase } from "@mui/material";
import { useRef, useState, useEffect } from "react";

interface TerminalPromptProps {
  onCommandSubmit: (command: string) => void;
  commandHistory: string[];
}

const COMMANDS = [
  "help", "ls", "clear", "whoami", "neofetch",
  "history", "pwd", "date", "exit",
];
const DIRS = [
  "aboutme", "skills", "projects", "resume", "contactme", "experience",
];

const TerminalPrompt = ({ onCommandSubmit, commandHistory }: TerminalPromptProps) => {
  const [input, setInput] = useState("");
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (input.trim()) onCommandSubmit(input);
      setInput("");
      setHistoryIdx(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const idx =
          historyIdx === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIdx - 1);
        setHistoryIdx(idx);
        setInput(commandHistory[idx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIdx !== -1) {
        const idx = historyIdx + 1;
        if (idx >= commandHistory.length) {
          setHistoryIdx(-1);
          setInput("");
        } else {
          setHistoryIdx(idx);
          setInput(commandHistory[idx]);
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const val = input.trimStart().toLowerCase();
      if (!val.includes(" ")) {
        const m = COMMANDS.filter((c) => c.startsWith(val) && c !== val);
        if (m.length === 1) setInput(m[0]);
      } else if (val.startsWith("cd ")) {
        const partial = val.slice(3).trim();
        const m = DIRS.filter((d) => d.startsWith(partial) && d !== partial);
        if (m.length === 1) setInput("cd " + m[0]);
      }
    }
  };

  return (
    <Box id="terminal-input" sx={{ display: "flex", alignItems: "center" }}>
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
      <InputBase
        inputRef={inputRef}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setHistoryIdx(-1);
        }}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        spellCheck={false}
        sx={{
          color: "white",
          ml: 1,
          fontFamily: "'Hack', monospace",
          fontSize: "0.9rem",
          flex: 1,
          "& input": { caretColor: "#64b5f6", padding: 0 },
        }}
      />
      {/* Blinking cursor indicator */}
      <Box
        sx={{
          width: "8px",
          height: "1.1rem",
          backgroundColor: "#64b5f6",
          animation: "blink 1s step-end infinite",
          ml: "-2px",
          display: input ? "none" : "block",
        }}
      />
    </Box>
  );
};

export default TerminalPrompt;

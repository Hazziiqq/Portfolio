import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./Theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Haziq Saleem — Terminal Portfolio",
  description:
    "Interactive terminal-themed portfolio of Haziq Saleem, a Computer Science student specializing in frontend development with React and Next.js.",
  keywords: [
    "Haziq Saleem",
    "Portfolio",
    "Frontend Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Haziq Saleem" }],
  openGraph: {
    title: "Haziq Saleem — Terminal Portfolio",
    description:
      "Explore my work through an interactive command-line interface.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

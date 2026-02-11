import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const _geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const _geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pankaj Kumar — Software Engineer",
  description:
    "Building systems that think clearly. Full-stack developer focused on correctness, distributed systems, and low-level architecture.",
  keywords: [
    "software engineer",
    "full stack developer",
    "systems thinking",
    "Rust",
    "TypeScript",
    "Next.js",
    "distributed systems",
  ],
  authors: [{ name: "Pankaj Kumar" }],
  openGraph: {
    title: "Pankaj Kumar — Software Engineer",
    description: "Building systems that think clearly.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${_geistSans.variable} ${_geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

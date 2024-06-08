import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh's Portfolio",
  description: "Experienced Software Developer specializing in web and mobile app development. Proficient in JavaScript, React, and React Native. Offering innovative freelance services.",
  keywords: [
    "Harsh Kaushik",
    "Portfolio",
    "JavaScript",
    "React",
    "React Native",
    "Web Development",
    "Mobile Development",
    "Freelance Developer",
    "Software Development",
    "TypeScript",
    "Next.js",
    "Frontend Development",
    "App Development",
    "Vanilla JavaScript",
    "Firebase",
    "Mental Health App",
    "Social Media Management",
    "Content Creation",
    "Video Editing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* <link rel="icon" href="/jsm-logo.png" sizes="any" /> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

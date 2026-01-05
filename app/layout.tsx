import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "iMessage Automation for Teams and AI Workflows | eoqo",
  description: "Elevate your team's productivity with iMessage automation and AI-powered workflows. Communicate without limits.",
  keywords: ["iMessage", "automation", "AI workflows", "team communication", "productivity"],
  authors: [{ name: "eoqo" }],
  openGraph: {
    title: "iMessage Automation for Teams and AI Workflows",
    description: "Elevate your team's productivity with iMessage automation and AI-powered workflows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

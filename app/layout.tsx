import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Hafidz Hubbusysyuhada - Full Stack Engineer",
  description:
    "Full Stack Engineer with 4+ years of experience building scalable web applications. Specialized in TypeScript, Node.js, React, and modern web technologies.",
  keywords: [
    "Full Stack Engineer",
    "TypeScript",
    "Node.js",
    "React",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Muhammad Hafidz Hubbusysyuhada" }],
  openGraph: {
    title: "Muhammad Hafidz Hubbusysyuhada - Full Stack Engineer",
    description:
      "Full Stack Engineer with 4+ years of experience building scalable web applications.",
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
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}

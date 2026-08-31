import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiritharan | Senior Engineer Portfolio",
  description:
    "Personal portfolio of Kiritharan, a Senior Engineer specializing in industrial robotics, automotive paint systems, commissioning, troubleshooting, production optimization, and technical support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased bg-[#0a0a0f] text-[#f8fafc]`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
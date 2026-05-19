import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NONGIZZ_OS | Nong Izz Harith",
  description:
    "Personal operating system of Nong Izz Harith, builder, strategist, and digital experimenter.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${mono.variable} ${display.variable}`}>
      <body>
        <div className="grid-bg" aria-hidden />
        <div className="scanlines" aria-hidden />
        <div className="vignette" aria-hidden />
        {children}
      </body>
    </html>
  );
}

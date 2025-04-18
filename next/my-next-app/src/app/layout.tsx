import { Link } from "@/components";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Song",
  description: "Portfolio website for Daniel Song",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen font-sans`}
      >
        <header className="fixed top-0 flex justify-between items-center border-b-1 w-full bg-background p-8">
          <Link
            href="/"
            className="font-mono after:content-['\_'] after:animate-blink"
          >
            daniel song
          </Link>
          <nav className="flex gap-8">
            <Link href="/">home</Link>
            <Link href="/projects">projects</Link>
            <Link href="/photos">photography</Link>
          </nav>
        </header>
        <main className="pt-30.25 px-8 pb-8 md:max-w-200 m-auto">
          {children}
        </main>
      </body>
    </html>
  );
}

import { NAV_LINKS } from "@/common";
import { Link, MobileMenuButton } from "@/components";
import { GoogleAnalytics } from "@next/third-parties/google";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 flex justify-between items-center border-b-1 bg-background w-full p-8 z-10">
          <Link
            href="/"
            className="font-mono after:content-['\_'] after:animate-blink"
          >
            daniel song
          </Link>
          <nav className="hidden md:flex gap-8">
            {NAV_LINKS.map(({ name, url }) => (
              <Link href={url} key={name}>
                {name}
              </Link>
            ))}
          </nav>
          <MobileMenuButton />
        </header>
        <main className="pt-30.25 px-8 pb-8 md:max-w-200 m-auto">
          {children}
        </main>
      </body>
      <GoogleAnalytics gaId="G-K4KWFWH09Y" />
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "Created by Irfansyah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <div className="relative min-h-screen">
          {/* Blob */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-700 via-pink-500 to-indigo-500 opacity-30 blur-3xl rounded-full pointer-events-none z-0 animate-[blob-move_10s_infinite]" />

          <div className="absolute top-[550px] -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-600 via-sky-400 to-cyan-300 opacity-20 blur-2xl rounded-full pointer-events-none z-0 animate-[blob-move_15s_infinite] delay-1000" />

          <div className="absolute top-[1400px] -left-52 xl:left-52 w-[800px] xl:w-[1000px] h-[800px] xl:h-[1000px] bg-[linear-gradient(to_bottom_right,_#6B21A8,_#EC4899,_#6366F1,_#38BDF8,_#22D3EE)] opacity-30 blur-3xl rounded-full pointer-events-none z-0 animate-[blob-move_10s_infinite]" />

          {/* <div className="absolute top-[1550px] -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-600 via-sky-400 to-cyan-300 opacity-20 blur-2xl rounded-full pointer-events-none z-0 animate-[blob-move_15s_infinite] delay-1000" /> */}

          {/* Content */}
          <Navbar />
          <main className="relative z-10 mx-auto w-full max-w-screen-xl px-3">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

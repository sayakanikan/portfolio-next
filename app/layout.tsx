import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Irfansyah | Portfolio Website",
  description: "Portfolio Created by Irfansyah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased overflow-x-hidden`}>
        <div className="relative min-h-screen">
          {/* Blob */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-700 via-pink-500 to-indigo-500 opacity-30 blur-3xl rounded-full pointer-events-none z-0 animate-[blob-move_10s_infinite]" />

          <div className="absolute top-[550px] -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-indigo-600 via-sky-400 to-cyan-300 opacity-20 blur-2xl rounded-full pointer-events-none z-0 animate-[blob-move_15s_infinite] delay-1000" />

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

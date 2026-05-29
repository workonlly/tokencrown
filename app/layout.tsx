import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import SplashCursor from "./splashCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tokenbet - Your Gateway to Seamless Betting Solutions",
  description: "Discover tokenbet, the ultimate turnkey betting solution designed for operators seeking a seamless and efficient deployment. With our cutting-edge technology and comprehensive support, tokenbet empowers you to launch your betting platform with ease, providing a secure and engaging experience for your users. Whether you're a seasoned operator or new to the industry, tokenbet is your trusted partner in delivering top-notch betting services. Contact us today to learn more about how tokenbet can transform your betting operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <div className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#f54f0a"
      />
      <Image
        src="/token.webp"
        alt="background"
        fill
        priority
        className="-z-10 object-cover "
      />
      <div className="absolute inset-0 bg-black/50 z-0" />
         {children}
     
    </div>
       </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Thasadith } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alice",
  description: `Alice is a simple
  and efficient calendar app that
  helps you manage your events,
  meetings, and schedules with ease.
  Stay organised and never miss an
  important date again!`
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased animate-fade-in`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

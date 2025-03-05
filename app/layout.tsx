import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "메이플 랜드 어금니 계산기",
  description: "메이플 랜드 어금니 계산기",
  icons: {
    icon: "/zombie-teeth.png",
  },
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
        <header className="flex justify-center items-center py-4 border-b-1 border-gray-200">
          <Image src="/zombie-teeth.png" alt="logo" width={50} height={50} />
        </header>
        {children}
      </body>
    </html>
  );
}

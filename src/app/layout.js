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

export const metadata = {
  title: "Multi-Step Form",
  description: "Generated by create next app",
  icon: './img/pinecone-logo.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="./img/pinecone-logo.png" rel="favicon" type="image" />
        <meta name="Multi-Step Form" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F4F4F4]`}
      >
        {children}
      </body>
    </html>
  );
}

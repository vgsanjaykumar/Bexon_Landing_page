import { Geist, Geist_Mono, Mona_Sans, } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const MonaSans = Mona_Sans({
  variable: "--fontMonasans",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bexon ",
  description: "landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${MonaSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

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
  title: "ELIM CHURCH", // Church name that will appear in the tab
  description: "Empowering lives through faith and love",
  icons: {
    icon: "/logo.jpg?v=2", // Correct path to the logo inside the public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Set the title (church name) */}
        <title>{metadata.title}</title>

        {/* Set the favicon (church logo) */}
        <link rel="icon" href="/logo.jpg?v=2" type="image/jpeg" />

        {/* Optional: Add other formats for better support */}
        <link rel="icon" href="/logo.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png?v=2" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

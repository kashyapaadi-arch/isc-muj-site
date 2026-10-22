import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const modernSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-modern",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "International Student Cell (ISC) | Manipal University Jaipur",
  description:
    "Official portal of the International Student Cell, Directorate of International Collaborations (DoIC), Manipal University Jaipur.",
  keywords: [
    "International Student Cell",
    "Manipal University Jaipur",
    "MUJ DoIC",
    "Student Exchange",
    "Semester Exchange",
  ],
  authors: [{ name: "Manipal University Jaipur" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${modernSans.variable} ${playfairDisplay.variable}`}>
      <body className={modernSans.className}>{children}</body>
    </html>
  );
}

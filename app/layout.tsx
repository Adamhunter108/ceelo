import type { Metadata } from "next";
import { Inter, Rock_Salt } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rock-salt",
});

export const metadata: Metadata = {
  title: "Cee Lo",
  description: "Put ya money up",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="bg-gray-800" lang="en">
      <body className={`${inter.className} ${rockSalt.className}`}>
        {children}
      </body>
    </html>
  );
}

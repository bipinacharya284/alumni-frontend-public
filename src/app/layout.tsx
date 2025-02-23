import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Alumni Intelligence System",
  description: "AI-powered Chat System for Alumni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Header />
        <main className="flex-grow overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

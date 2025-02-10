import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Cooper Rachow",
  description: "My Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

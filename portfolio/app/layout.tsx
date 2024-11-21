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
    <html lang="en">
      <body
        className={`antialiased`}
        suppressHydrationWarning={true}
        data-theme="coffee"
      >
        {children}
      </body>
    </html>
  );
}

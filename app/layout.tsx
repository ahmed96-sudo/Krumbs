import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Krumbs - Freshly Baked Just For You",
  description: "Premium cookies and special cakes delivered warm to your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} font-sans antialiased h-full py-1` }
      >
        {children}
      </body>
    </html>
  );
}

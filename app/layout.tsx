import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Krumbs - توّه طالع من الفرن خصيصًا لك",
  description: "كوكيز فاخرة وكيكات مميّزة نوصلها لك وهي دافية لين باب بيتك.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${poppins.className} font-sans antialiased h-full py-1` }
      >
        {children}
      </body>
    </html>
  );
}

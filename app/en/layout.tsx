import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
    weight: '400',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: "Krumbs - Freshly Baked Just For You",
    description: "Premium cookies and special cakes delivered warm to your doorstep.",
};

export default function EnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div lang="en" dir="ltr" className={`${poppins.className} font-sans antialiased h-full py-1 ltr`}>
            {children}
        </div>
    );
}

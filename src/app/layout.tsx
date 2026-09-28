import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
    title: "Design Your Workspace",
    description: "Configure your dream workspace and rent it.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
            <body className="bg-cream font-sans text-bark antialiased">{children}</body>
        </html>
    );
}
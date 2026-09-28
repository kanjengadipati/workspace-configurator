import type { Metadata } from "next";
import "./globals.css";

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
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
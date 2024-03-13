import type { Metadata } from 'next';
import { Poppins as Font } from 'next/font/google';
import './globals.css';

const font = Font({ weight: ['400'], subsets:["latin"] });

export const metadata: Metadata = {
    title: 'Coca-Cola app',
    description: "An app to manage the coca-cola's inventory",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={font.className}>{children}</body>
        </html>
    );
}

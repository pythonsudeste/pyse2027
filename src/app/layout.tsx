import { Header } from "@/components/header/Header";
import { Archivo, Inter } from 'next/font/google';import './globals.css';

export const metadata = {
    title: 'Python Sudeste 2027',
    description: 'Inscreva-se na Python Sudeste 2027',
};

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const archivo = Archivo({
    subsets: ['latin'],
    variable: '--font-archivo',
    display: 'swap',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR" className={`${inter.variable} ${archivo.variable}`}>
            <body>
                <Header/>
                {children}
            </body>
        </html>
    );
}
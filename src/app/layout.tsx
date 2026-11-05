import './globals.css';

export const metadata = {
    title: 'Python Sudeste 2027',
    description: 'Inscreva-se na Python Sudeste 2027',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
            <body>{children}</body>
        </html>
    );
}
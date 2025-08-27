import type { Metadata } from 'next';
import { ThemeProvider } from '@/lib/theme-context';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ahmed Hossam - Portofolio',
  description: 'A professional portfolio showcasing my work, skills, and experience in full-stack development.',
  keywords: ['portfolio', 'developer', 'full-stack', 'web development', 'react', 'next.js'],
  authors: [{ name: 'Ahmed Hossam' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

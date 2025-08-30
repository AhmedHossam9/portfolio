import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/lib/theme-context';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ahmed Hossam - Portofolio',
  description: 'A professional portfolio showcasing my work, skills, and experience in full-stack development.',
  keywords: ['portfolio', 'developer', 'full-stack', 'web development', 'react', 'next.js'],
  authors: [{ name: 'Ahmed Hossam' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

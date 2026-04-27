import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Devpilot | Hire Exceptional Developers, Faster',
  description: 'Connect with pre-vetted talent through our AI-driven platform.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#f8f9fb] font-sans text-gray-900 antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

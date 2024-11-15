import type { Metadata } from 'next';
import { Source_Serif_4 } from 'next/font/google';
import localFont from 'next/font/local';
import clsx from 'clsx';
import './globals.css';

const monaFont = localFont({
  src: './fonts/Mona-Sans.woff2',
  display: 'swap',
  variable: '--font-mona',
});

const serifFont = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Dribbble',
  description: 'Created by Brochot.mathieu@gmail.com fullstack developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(monaFont.variable, serifFont.variable)}>
        {children}
      </body>
    </html>
  );
}

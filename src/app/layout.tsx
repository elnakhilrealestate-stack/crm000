import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "VALUE 9 MALL | نظام إدارة المبيعات العقارية",
  description: "نظام إدارة علاقات العملاء والمبيعات لمشروع VALUE 9 MALL",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${inter.variable} bg-stone-50 text-stone-900 antialiased font-sans`}>{children}</body>
    </html>
  );
}

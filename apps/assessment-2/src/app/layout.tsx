import type { Metadata, NextPage } from "next";
import { Inter } from "next/font/google";
import { ReactElement, ReactNode } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning className={inter.className}>
        {children}
      </body>
    </html>
  );
}
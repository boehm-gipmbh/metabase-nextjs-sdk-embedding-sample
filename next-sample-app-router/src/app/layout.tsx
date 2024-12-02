import {
  defineEmbeddingSdkConfig,
  MetabaseProvider,
} from "@metabase/embedding-sdk-react/next";
import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

if (!process.env.NEXT_PUBLIC_METABASE_INSTANCE_URL) {
  throw new Error("Missing NEXT_PUBLIC_METABASE_INSTANCE_URL");
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const config = defineEmbeddingSdkConfig({
  metabaseInstanceUrl: process.env.NEXT_PUBLIC_METABASE_INSTANCE_URL,
  authProviderUri: `/api/metabase/auth`,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ display: "flex" }}
      >
        <nav>
          <Link href="/">
            <strong>Nextjs App Router</strong>
          </Link>
          <Link href="/static-question">Static question </Link>
          <Link href="/interactive-question">Interactive question</Link>
          <Link href="/static-dashboard">Static Dashboard</Link>
          <Link href="/interactive-dashboard">Interactive Dashboard</Link>
        </nav>
        <MetabaseProvider config={config}>{children}</MetabaseProvider>
      </body>
    </html>
  );
}

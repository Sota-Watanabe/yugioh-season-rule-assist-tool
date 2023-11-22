import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import "ress";
import Script from "next/script";
import React from "react";

const notoSansJp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yugioh-db.takoyama.net/"),
  title: "遊戯王-5期までDB",
  description:
    "戯王5期までのカードを集めたデータベースです。4期縛り、5期縛り、04環境でのデュエルで活用することができます。",
  viewport: "width=1100",
  openGraph: {
    title: "遊戯王-5期までDB",
    description:
      "遊戯王5期までのカードを集めたデータベースです。4期縛り、5期縛り、04環境でのデュエルで活用することができます。",
    url: "https://yugioh-db.takoyama.net/",
    siteName: "遊戯王-5期までDB",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    title: "遊戯王-5期までDB",
    description:
      "遊戯王5期までのカードを集めたデータベースです。4期縛り、5期縛り、04環境でのデュエルで活用することができます。",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ZBG4R8Z1GY"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-ZBG4R8Z1GY');
  `,
        }}
      />
      <body style={{ minWidth: "1024px" }} className={notoSansJp.className}>
        {children}
      </body>
    </html>
  );
}

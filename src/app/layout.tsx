import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import "ress";
import Script from "next/script";
import React from "react";
import { Providers } from "@/providers";
import { GoogleAdScript } from "./googleads-script";

const notoSansJp = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://yugioh-db.takoyama.net/"),
  title: "遊戯王-5期までDB",
  description:
    "遊戯王5期までのカードを集めたデータベースです。5期縛りにはもちろん、4期までの4期縛り、2004年カードまでの04環境でのデュエルでも活用することができます。",
  viewport: "width=1100",
  // openGraph: {
  //   title: "遊戯王-5期までDB",
  //   description:
  //     "遊戯王5期までのカードを集めたデータベースです。5期縛りにはもちろん、4期までの4期縛り、2004年カードまでの04環境でのデュエルでも活用することができます。",
  //   url: "https://yugioh-db.takoyama.net/",
  //   siteName: "遊戯王-5期までDB",
  //   locale: "ja_JP",
  //   type: "website",
  //   images: "https://yugioh-db.takoyama.net/opengraph-image.png",
  // },
  twitter: {
    title: "遊戯王-5期までDB",
    description:
      "遊戯王5期までのカードを集めたデータベースです。5期縛りにはもちろん、4期までの4期縛り、2004年カードまでの04環境でのデュエルでも活用することができます。",
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
        <Providers>{children}</Providers>
      </body>
      <GoogleAdScript />
    </html>
  );
}

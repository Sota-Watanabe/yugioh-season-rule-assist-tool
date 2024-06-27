"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { css } from "@mui/material";

const PUBLISHER_ID = "4787767601026636";
const SLOT_ID = '6768688677'
declare global {
  interface Window {
    adsbygoogle: { [key: string]: unknown }[];
  }
}

type GoogleAdProps = {
  format?: string;
  responsive?: string;
  style?: any;
};

export const GoogleAd = ({
  format = "auto",
  responsive = "true",
  style,
}: GoogleAdProps) => {
  let pathname = usePathname();
  pathname = pathname ? pathname : "";

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, [pathname]);

  return (
    <div
      css={css`
        flex: 1;
      `}
      key={pathname.replace(/\//g, "-") + "-" + SLOT_ID}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", ...style }}
        data-ad-client={`ca-pub-${PUBLISHER_ID}`}
        data-ad-slot={SLOT_ID}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

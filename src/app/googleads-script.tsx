import Script from "next/script";

export const GoogleAdScript = () => {
  //   if (process.env.VERCEL_ENV === "production") {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4787767601026636"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
  //   }
  return <></>;
};

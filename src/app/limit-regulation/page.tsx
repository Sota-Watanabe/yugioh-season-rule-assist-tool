"use client";
import { css } from "@emotion/react";
import { Header } from "@/app/components/header";
import { PageLinks } from "@/app/components/page-links";
import { useFetchCards } from "@/app/domains/hooks/use-fetch-cards";
import { SeasonalUsefulCard } from "@/app/components/seasonal-useful-card";

const top = css`
  background: #084371;
`;

const main = css`
  width: 968px;
  padding: 20px 0;
  margin: auto;
  a {
    display: block;
    color: #1a0dab;
    font-family: Dela Gothic One;
    font-size: 36px;
    text-decoration-line: underline;
  }
`;

export default function CardListPage() {
  const { fetchCards } = useFetchCards({ useful: true });

  return (
    <>
      <Header />
      <div css={top}>
        <PageLinks />
      </div>
      <div css={main}>
        <a href="aa">1期の制限リスト</a>
        <a href="aa">2期の制限リスト</a>
        <a href="aa">3期の制限リスト</a>
        <a href="aa">4期の制限リスト</a>
        <a href="aa">5期の制限リスト</a>
      </div>
    </>
  );
}

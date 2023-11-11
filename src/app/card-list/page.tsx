"use client";
import { css } from "@emotion/react";
import Header from "@/app/components/header";
import PageLinks from "@/app/components/page-links";
import CardFilter from "@/app/components/card-filter";

const top = css`
  background: #084371;
`;

const main = css`
  width: 968px;
  margin: auto;
`;

export default function CardListPage() {
  return (
    <>
      <Header />
      <div css={top}>
        <PageLinks />
      </div>
      <div css={main}>
        <CardFilter />
      </div>
    </>
  );
}

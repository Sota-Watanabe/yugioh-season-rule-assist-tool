"use client";
import { css } from "@emotion/react";
import Header from "@/app/components/header";
import PageLinks from "@/app/components/page-links";

const top = css`
  background: #053a68;
  padding: 32px;
`;

export default function CardListPage() {
  return (
    <>
      <Header />
      <div css={top}>
        <PageLinks />
      </div>
    </>
  );
}

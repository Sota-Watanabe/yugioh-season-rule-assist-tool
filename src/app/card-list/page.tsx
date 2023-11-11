"use client";
import { css } from "@emotion/react";
import Header from "@/app/components/header";
import PageLinks from "@/app/components/page-links";

const top = css`
  background: #084371;
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

"use client";
import { css } from "@emotion/react";
import { Header } from "@/app/components/header";
import { PageLinks } from "@/app/components/page-links";
import { LimitRegulationAccordion } from "../components/limit-regulation-accordion";
import { limitRegulationList } from "@/app/domains/models/limit-regulation-list";

const top = css`
  background: #084371;
`;

const main = css`
  width: 968px;
  margin: 45px auto;
  button {
    color: #1a0dab;
    font-family: Dela Gothic One;
    font-size: 36px;
    text-decoration-line: underline;
    cursor: pointer;
  }
`;

export default function CardListPage() {
  return (
    <>
      <Header />
      <div css={top}>
        <PageLinks />
      </div>
      <div css={main}>
        {limitRegulationList.map((limitRegulation) => (
          <LimitRegulationAccordion
            value={limitRegulation}
            key={limitRegulation.name}
          />
        ))}
      </div>
    </>
  );
}

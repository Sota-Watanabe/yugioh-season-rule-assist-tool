"use client";
import { css } from "@emotion/react";
import { Button, Link } from "@mui/material";

const main = css`
  margin: auto;
  display: flex;
  gap: 16px;
  width: 968px;
  background: #084371;
`;

const pageLinkButton = css`
  color: #fff;
  text-align: center;
  font-family: Dela Gothic One;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const PageLinks = () => {
  return (
    <div css={main}>
      <Link href="card-list">
        <Button css={pageLinkButton}>カードリスト</Button>
      </Link>
      <Link href="useful-card">
        <Button css={pageLinkButton}>汎用カード</Button>
      </Link>
      <Link href="limit-regulation">
        <Button css={pageLinkButton}>制限リスト</Button>
      </Link>
      <Link href="random-pack">
        <Button css={pageLinkButton}>ランダムパック</Button>
      </Link>
    </div>
  );
};

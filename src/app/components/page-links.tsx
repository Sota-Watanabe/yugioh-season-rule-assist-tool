"use client";
import { css } from "@emotion/react";
import { Button, Link } from "@mui/material";

const main = css`
  margin: auto;
  padding-bottom: 4px;
  display: flex;
  align-items: center;
  width: 1000px;
  background: #084371;
`;

const pageLinkButton = css`
  color: #fff;
  padding: 18px;
  text-align: center;
  font-family: Dela Gothic One;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const verticalLine = css`
  width: 1px;
  height: 29px;
  background-color: #fff;
`;

export const PageLinks = () => {
  return (
    <div css={main}>
      <Link href="card-list">
        <Button css={pageLinkButton}>カードリスト</Button>
      </Link>
      <div css={verticalLine} />
      <Link href="useful-card">
        <Button css={pageLinkButton}>汎用カード</Button>
      </Link>
      <div css={verticalLine} />
      <Link href="limit-regulation">
        <Button css={pageLinkButton}>制限リスト</Button>
      </Link>
      <div css={verticalLine} />
      <Link href="random-pack">
        <Button css={pageLinkButton}>ランダムパック</Button>
      </Link>
    </div>
  );
};

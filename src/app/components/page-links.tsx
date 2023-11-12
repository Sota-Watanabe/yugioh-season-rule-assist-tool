"use client";
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { firestore } from "../../firebase";
import { config } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect } from "react";

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
      <Button css={pageLinkButton}>カードリスト</Button>
      <Button css={pageLinkButton}>汎用カード</Button>
      <Button css={pageLinkButton}>制限リスト</Button>
      <Button css={pageLinkButton}>ランダムパック</Button>
    </div>
  );
};

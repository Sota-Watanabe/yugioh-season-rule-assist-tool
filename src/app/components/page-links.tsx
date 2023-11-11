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
  gap: 25px;
  width: 1000px;
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

export default function PageLinks() {
  const maybeRef = collection(firestore, "cards");
  const [value, loading] = useCollection(
    query(maybeRef, where("atk", "==", 3000), where("level", "==", 3))
  );
  if (loading) {
    return <p>ローディング</p>;
  }
  console.log("data", value?.docs[0].data());
  return (
    <div css={main}>
      <Button className="delaGothicOne" css={pageLinkButton}>
        カードリスト
      </Button>
      <Button className="delaGothicOne" css={pageLinkButton}>
        汎用カード
      </Button>
      <Button className="delaGothicOne" css={pageLinkButton}>
        制限リスト
      </Button>
      <Button className="delaGothicOne" css={pageLinkButton}>
        ランダムパック
      </Button>
    </div>
  );
}

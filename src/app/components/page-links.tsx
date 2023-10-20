"use client";
import { css } from "@emotion/react";
import { Button } from "@mui/material";

const main = css`
  margin: auto;
  display: flex;
  gap: 32px;
  max-width: 800px;
`;

const linkColors = {
  cardList: css`
    background: #fcaeb0;
    :hover {
      background: #fcaeb0;
      opacity: 0.6;
    }
  `,
  multiCard: css`
    background: #d9d0b6;
    :hover {
      background: #d9d0b6;
      opacity: 0.6;
    }
  `,
  limitRegulation: css`
    background: #99e5c4;
    :hover {
      background: #99e5c4;
      opacity: 0.6;
    }
  `,
  randomCard: css`
    background: #96c8f2;
    :hover {
      background: #96c8f2;
      opacity: 0.6;
    }
  `,
};

const pageLinkButton = css`
  font-size: 20px;
  width: 300px;
  height: 80px;
  color: #071320;
  font-weight: 600;
`;

export default function PageLinks() {
  return (
    <div css={main}>
      <Button css={[linkColors.cardList, pageLinkButton]}>カードリスト</Button>
      <Button css={[linkColors.multiCard, pageLinkButton]}>汎用カード</Button>
      <Button css={[linkColors.limitRegulation, pageLinkButton]}>
        制限リスト
      </Button>
      <Button css={[linkColors.randomCard, pageLinkButton]}>
        ランダムカード
      </Button>
    </div>
  );
}

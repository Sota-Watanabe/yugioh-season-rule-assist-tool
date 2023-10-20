"use client";
import { css } from "@emotion/react";

const main = css`
  height: 40px;
  line-height: 40px;
  background-color: #0d0d0d;
  text-align: center;
  font-size: 20px;
`;

export default function Header() {
  return <div css={main}>遊戯王 X期縛りアシストツール</div>;
}

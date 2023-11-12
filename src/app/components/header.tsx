import { css } from "@emotion/react";

const main = css`
  height: 50px;
  color: #e40311;
  font-family: Dela Gothic One;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 50px;
  text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, -1px 1px 0 #fff,
    1px -1px 0 #fff, 0px 1px 0 #fff, 0-1px 0 #fff, -1px 0 0 #fff, 1px 0 0 #fff;
  background: #084371;
`;

export const Header = () => {
  return <div css={main}>遊戯王 5期までデータベース</div>;
};

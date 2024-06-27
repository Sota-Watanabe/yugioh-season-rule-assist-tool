import { GoogleAd } from "./googlead";
import { Header } from "./header";
import { PageLinks } from "./page-links";
import { css } from "@emotion/react";
import { isMobile } from "react-device-detect";

type Props = {} & React.PropsWithChildren;
const top = css`
  background: #084371;
`;

const main = css`
  display: flex;
  gap: 16px;
`;

const mt120 = css`
  margin-top: 120px;
`;

export const PageTemplate: React.FC<Props> = ({ children }) => {
  console.log("isMobile", isMobile);
  return (
    <>
      <Header />
      <div css={top}>
        <PageLinks />
      </div>
      {isMobile && <GoogleAd />}
      <div css={main}>
        <div css={mt120}>
          <GoogleAd />
        </div>
        {children}
        <div css={mt120}>
          <GoogleAd />
        </div>
      </div>
    </>
  );
};

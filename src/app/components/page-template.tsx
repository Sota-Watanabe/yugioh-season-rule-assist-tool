import { GoogleAd } from "./googlead";
import { Header } from "./header";
import { PageLinks } from "./page-links";
import { css } from "@emotion/react";

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
  const isSP = navigator.userAgent.match(/iPhone|Android.+Mobile/);
  return (
    <>
      <Header />
      <div css={top}>
        <PageLinks />
      </div>
      {isSP && <GoogleAd />}
      <div css={main}>
        {!isSP && (
          <div css={mt120}>
            <GoogleAd />
          </div>
        )}
        {children}
        {!isSP && (
          <div css={mt120}>
            <GoogleAd />
          </div>
        )}
      </div>
    </>
  );
};

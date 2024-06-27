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
export const PageTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div css={top}>
        <PageLinks />
      </div>
      <div css={main}>
        <GoogleAd
          css={css`
            flex: 1;
            margin-top: 120px;
          `}
        />
        {children}
        <GoogleAd
          css={css`
            flex: 1;
            margin-top: 120px;
          `}
        />
      </div>
    </>
  );
};

import { useMeasure } from "react-use";
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
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  return (
    <>
      <Header />
      <div css={top}>
        <PageLinks />
      </div>
      {width === 0 && <GoogleAd />}
      <div css={main}>
        <div css={mt120} ref={ref}>
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

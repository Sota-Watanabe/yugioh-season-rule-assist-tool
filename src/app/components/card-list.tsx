import { css } from "@emotion/react";
import { CardType } from "@/app/domains/models/card-type";
import { Card } from "@/app/components/card";

const main = css`
  margin: 16px 20px;
  > div {
    border-bottom: 1px solid #000;
  }
  > div:last-of-type {
    border-bottom: none;
  }
`;

type Props = {
  values?: CardType[];
};

export const CardList: React.FC<Props> = ({ values }) => {
  if (!values) return;
  return (
    <div css={main}>
      {values.map((value) => {
        return (
          <div key={value.cid}>
            <Card value={value} />
          </div>
        );
      })}
    </div>
  );
};

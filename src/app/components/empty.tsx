import { css } from "@emotion/react";

const main = css`
  display: flex;
  padding: 20px;
  gap: 9px;
  > div {
    flex-grow: 1;
    p {
      padding: 0 8px 8px;
      font-size: 20px;
    }
    .horizontal-line {
      width: 100%;
      height: 1px;
      background-color: #989898;
    }
  }
`;

export const Empty = () => {
  return (
    <div css={main}>
      <img
        src="https://ocg-card.com/img/card/ocg/stbl-076.jpg"
        alt="card_url"
        width={113}
        height={164}
      />
      <div>
        <p>該当データがありません</p>
        <div className="horizontal-line" />
      </div>
    </div>
  );
};

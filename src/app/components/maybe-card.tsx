import { css } from "@emotion/react";
import { GoogleSearchItem } from "../domains/models/google-search-response";
import { defaultValues } from "../domains/hooks/use-fetch-cards";

const main = css`
  display: flex;
  padding: 20px;
  min-height: 204px;
  .img-container {
    display: flex;
    align-items: center;
    margin-right: 9px;
  }
  .text-container {
    width: 100%;
    .title {
      font-size: 20px;
      line-height: 200%;
    }
    .index {
      font-size: 18px;
      line-height: 250%;
    }
    .text {
      font-size: 14px;
    }
  }
  .horizontal-line {
    width: 100%;
    height: 1px;
    background-color: #989898;
  }
  a {
    cursor: pointer;
  }
`;

type Props = {
  value: GoogleSearchItem;
  index: number;
};

export const MaybeCard: React.FC<Props> = ({ value, index }) => {
  return (
    <div css={main}>
      <div className="img-container">
        <img
          src={"/empty/dummy-token.jpg"}
          alt="card_url"
          width={113}
          height={164}
        />
      </div>
      <div className="text-container">
        <a className="title" href={value.link} target="_blank">
          <p>{value.title}</p>
        </a>
        <div className="horizontal-line" />
        <p className="index">遊戯王wikiでの検索結果: {index + 1}</p>
        <div className="horizontal-line" />
        <p className="text">{value.snippet}</p>
      </div>
    </div>
  );
};

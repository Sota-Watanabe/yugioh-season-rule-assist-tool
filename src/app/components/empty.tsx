import { css } from "@emotion/react";
import { useFetchGoogleSearch } from "../domains/hooks/use-fetch-google-search";
import { MaybeCard } from "./maybe-card";
import { useEffect } from "react";

const noResult = css`
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

type Props = { searchText: string };

export const Empty = (props: Props) => {
  const { googleSearchResult, setQuery } = useFetchGoogleSearch(
    props.searchText
  );
  useEffect(() => {
    setQuery(props.searchText);
  }, [props.searchText]);

  return (
    <>
      <div css={noResult}>
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
      {googleSearchResult && (
        <>
          {googleSearchResult.map((item, index) => (
            <div key={index}>
              <MaybeCard value={item} index={index} />
            </div>
          ))}
        </>
      )}
    </>
  );
};

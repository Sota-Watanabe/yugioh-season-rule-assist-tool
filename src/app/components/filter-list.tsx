"use client";
import { css } from "@emotion/react";
import { useFormContext } from "react-hook-form";
import { SearchValueBlocks } from "@/app/components/search-value-blocks";
import {
  searchAttributeOptions,
  searchCardOptions,
  searchIncantationOptions,
  searchLevelOptions,
  searchMonsterOptions,
  searchSeasonOptions,
  searchZeroFourOptions,
} from "@/app/domains/models/search-params";

const main = css`
  padding: 12px 20px;
  .submit {
    display: flex;
    margin: 10px;
    justify-content: center;
    button {
      width: 80px;
      height: 32px;
      background: #ffba00;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;
const container = css`
  display: flex;
  flex-direction: column;
  gap: 3px;
  > div {
    display: flex;
    gap: 3px;
  }
`;
const blockStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  font-size: 15px;
  color: #fff;
  min-height: 32px;
  text-align: center;
  line-height: 100%;
  background: #012c53;
`;
export const FilterList = () => {
  return (
    <div css={main}>
      <div css={container}>
        <div>
          <div css={blockStyle}>何期</div>
          <SearchValueBlocks
            searchFilter="season"
            searchOptions={searchSeasonOptions}
          />
        </div>
        <div>
          <div css={blockStyle}>04環境</div>
          <SearchValueBlocks
            searchFilter="zeroFour"
            searchOptions={searchZeroFourOptions}
          />
        </div>
        <div>
          <div css={blockStyle}>属性</div>
          <SearchValueBlocks
            searchFilter="attribute"
            searchOptions={searchAttributeOptions}
            width="700px"
          />
        </div>
        <div>
          <div css={blockStyle}>呪文</div>
          <SearchValueBlocks
            searchFilter="incantation"
            searchOptions={searchIncantationOptions}
          />
        </div>
        <div>
          <div css={blockStyle}>種族</div>
          <SearchValueBlocks
            searchFilter="monster"
            searchOptions={searchMonsterOptions}
          />
        </div>
        <div>
          <div css={blockStyle}>種類</div>
          <SearchValueBlocks
            searchFilter="card"
            searchOptions={searchCardOptions}
          />
        </div>
        <div>
          <div css={blockStyle}>レベル</div>
          <SearchValueBlocks
            searchFilter="level"
            searchOptions={searchLevelOptions}
          />
        </div>
      </div>
      <div className="submit">
        <button type="submit">検索</button>
      </div>
    </div>
  );
};

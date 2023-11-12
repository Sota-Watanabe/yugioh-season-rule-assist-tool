"use client";
import { css } from "@emotion/react";
import { useFormContext } from "react-hook-form";
import { SearchValueBlocks } from "@/app/components/search-value-blocks";
import {
  searchSeasonOptions,
  searchZeroFourOptions,
} from "@/app/domains/models/search-params";

const main = css`
  padding: 12px 20px;
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
export const blockStyle = css`
  width: 110px;
  font-size: 15px;
  color: #fff;
  min-height: 32px;
  text-align: center;
  line-height: 32px;
  background: #012c53;
`;
export const FilterList = () => {
  const { register } = useFormContext();

  return (
    <div css={main}>
      <div css={container}>
        <div>
          <div css={blockStyle}>何期</div>
          <SearchValueBlocks
            register={register("season")}
            searchOptions={searchSeasonOptions}
          />
        </div>
        <div>
          <div css={blockStyle}>04環境</div>
          <SearchValueBlocks
            register={register("zeroFour")}
            searchOptions={searchZeroFourOptions}
          />
        </div>
      </div>
      <button type="submit">ボタン</button>
    </div>
  );
};

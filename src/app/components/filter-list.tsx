"use client";
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import { firestore } from "../../firebase";
import { config } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useForm } from "react-hook-form";
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
export default function FilterList() {
  const { register, handleSubmit, getValues } = useForm({
    defaultValues: { season: [], zeroFour: [] },
  });
  // const { fetchCard } = useFetchFilteredCard();

  const onSubmit = () => {
    const values = getValues();
    // fetchCard({ page: 1, values });
  };

  return (
    <div css={main}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      </form>
    </div>
  );
}

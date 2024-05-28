"use client";
import { css } from "@emotion/react";
import { Header } from "@/app/components/header";
import { PageLinks } from "@/app/components/page-links";
import {
  PERPAGE,
  defaultValues,
  useFetchCards,
} from "@/app/domains/hooks/use-fetch-cards";
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FilterList } from "@/app/components/filter-list";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { CardList } from "@/app/components/card-list";
import { Pagination } from "@mui/material";
import { Empty } from "@/app/components/empty";
import { TextFilter } from "@/app/components/text-filter";
import { sortOptions } from "../domains/models/search-params";
import { ResultCardsHeader } from "../components/result-cards-header";

const top = css`
  background: #084371;
`;

const main = css`
  width: 968px;
  padding: 20px 0;
  margin: auto;
  .search-header {
    height: 51px;
    display: flex;
    gap: 24px;
    justify-content: normal;
    .text-filter {
      flex: 1;
    }
  }
`;

const filterBtn = css`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #477490;
  color: #fff;
  cursor: pointer;
  .text {
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const pagination = css`
  margin: 40px 0 80px;
  display: flex;
  justify-content: center;
`;
export default function CardListPage() {
  const useFormMethods = useForm({
    defaultValues,
  });
  const { getValues, handleSubmit, resetField } = useFormMethods;
  const { fetchCards, updateCardFilter, totalCount, page, updatePage } =
    useFetchCards(getValues());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onSubmit = () => {
    updateCardFilter(getValues());
    setIsOpen(false); // TODO: 閉じるか迷い中
  };
  const onClear = () => {
    // NOTE: フィルタリング要素のみリセット（もっといい方法ありそう）
    const keys = Object.keys(defaultValues);
    const excludeKeys = ["sort", "searchText", "useful", "limit", "isShuffle"];
    const targetKeys = keys.filter((key) => !excludeKeys.includes(key));
    targetKeys.forEach((key) => {
      resetField(key as keyof typeof defaultValues);
    });
  };

  const isEmpty = fetchCards.totalCount === 0;
  return (
    <>
      <Header />
      <div css={top}>
        <PageLinks />
      </div>
      <div css={main}>
        <FormProvider {...useFormMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="search-header">
              <div className="text-filter">
                <TextFilter />
              </div>
              <div css={filterBtn} onClick={() => setIsOpen(!isOpen)}>
                <p className="text">フィルタリング</p>
                {isOpen && (
                  <KeyboardArrowUpIcon fontSize="large" className="icon" />
                )}
                {isOpen || (
                  <KeyboardArrowDownIcon fontSize="large" className="icon" />
                )}
              </div>
            </div>
            {isOpen && <FilterList onClear={onClear} />}
            {isEmpty && <Empty searchText={getValues().searchText} />}
            {isEmpty || (
              <>
                <ResultCardsHeader
                  totalCount={totalCount}
                  onSubmit={onSubmit}
                />
                <CardList values={fetchCards.cards} />
                <div css={pagination}>
                  <Pagination
                    count={Math.ceil(totalCount / PERPAGE)} //総ページ数
                    color="primary"
                    onChange={(e, page) => updatePage(page)} //変更されたときに走る関数。第2引数にページ番号が入る
                    page={page}
                  />
                </div>
              </>
            )}
          </form>
        </FormProvider>
      </div>
    </>
  );
}

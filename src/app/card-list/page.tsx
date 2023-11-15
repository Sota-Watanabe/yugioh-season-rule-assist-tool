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
import { FormProvider, useForm } from "react-hook-form";
import { CardList } from "@/app/components/card-list";
import { Pagination } from "@mui/material";

const top = css`
  background: #084371;
`;

const main = css`
  width: 968px;
  margin: auto;
`;

const header = css`
  height: 44px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #477490;
  color: #fff;
  .text {
    width: 900px;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .icon {
    margin-right: 20px;
  }
`;

const pagination = css`
  margin: 40px 0 80px;
  display: flex;
  justify-content: center;
`;

const searchResult = css`
  font-size: 18px;
  span {
    font-size: 22px;
  }
`;

export default function CardListPage() {
  const useFormMethods = useForm({
    defaultValues,
  });
  const { getValues, handleSubmit } = useFormMethods;
  const { fetchCards, updateCardFilter, totalCount, page, updatePage } =
    useFetchCards(getValues());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onSubmit = () => {
    updateCardFilter(getValues());
    // setIsOpen(false) // TODO: 閉じるか迷い中
  };

  return (
    <>
      <Header />
      <div css={top}>
        <PageLinks />
      </div>
      <div css={main}>
        <FormProvider {...useFormMethods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div css={header} onClick={() => setIsOpen(!isOpen)}>
              <p className="text">カードフィルター</p>
              {isOpen && (
                <KeyboardArrowDownIcon fontSize="large" className="icon" />
              )}
              {isOpen || (
                <KeyboardArrowUpIcon fontSize="large" className="icon" />
              )}
            </div>
            {isOpen && <FilterList />}
            {fetchCards.cards?.length !== 0 && (
              <>
                <p css={searchResult}>
                  検索結果: <span>{totalCount} </span>件
                </p>
                <CardList values={fetchCards.cards} />
              </>
            )}
            <div css={pagination}>
              <Pagination
                count={Math.ceil(totalCount / PERPAGE)} //総ページ数
                color="primary"
                onChange={(e, page) => updatePage(page)} //変更されたときに走る関数。第2引数にページ番号が入る
                page={page}
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
}

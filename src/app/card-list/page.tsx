"use client";
import { css } from "@emotion/react";
import Header from "@/app/components/header";
import PageLinks from "@/app/components/page-links";
import {
  defaultValues,
  useFetchCards,
} from "@/app/domains/hooks/use-fetch-cards";
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterList from "@/app/components/filter-list";
import { FormProvider, useForm } from "react-hook-form";

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

export default function CardListPage() {
  console.log("CardListPage");
  const useFormMethods = useForm({
    defaultValues,
  });
  const { getValues, handleSubmit } = useFormMethods;
  const { fetchCards, updateCardFilter } = useFetchCards(getValues());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("fetch", fetchCards);
  const onSubmit = () => {
    updateCardFilter(getValues());
    // updateCardFilter
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
            {/* <CardList /> */}
            {/* <PageNation /> */}
          </form>
        </FormProvider>
      </div>
    </>
  );
}

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
import FilterList from "@/app/components/filter-list";

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

export default function CardFilter() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div css={header} onClick={() => setIsOpen(!isOpen)}>
        <p className="text">カードフィルター</p>
        {isOpen && <KeyboardArrowDownIcon fontSize="large" className="icon" />}
        {isOpen || <KeyboardArrowUpIcon fontSize="large" className="icon" />}
      </div>
      {isOpen && <FilterList />}
    </>
  );
}

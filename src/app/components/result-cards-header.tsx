import { css } from "@emotion/react";
import { sortOptions } from "@/app/domains/models/search-params";
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";

const main = css`
  display: flex;
  margin: 13px 0;
  justify-content: space-between;
  align-items: center;
  .search-result {
    font-size: 18px;
    span {
      font-size: 22px;
    }
  }
  .sort-wrap {
    display: inline;
    position: relative;
    width: 175px;
    font-size: 20px;
    background: #efefef;
    padding: 3px 8px;
  }
  .sort-wrap::after {
    content: "";
    position: absolute;
    right: 10px;
    top: 15px;
    width: 10px;
    height: 10px;
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    transform: translateY(-50%) rotate(-135deg);
    font-size: 20px;
  }
  select {
    width: 100%;
  }
`;
type Props = {
  totalCount: number;
  onSubmit: () => void;
};

export const ResultCardsHeader: React.FC<Props> = ({
  totalCount,
  onSubmit,
}) => {
  const { register, watch, getValues } = useFormContext();

  useEffect(() => {
    onSubmit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("sort")]);

  return (
    <div css={main}>
      <span className="search-result">
        検索結果: <span>{totalCount} </span>件
      </span>
      <span className="sort-wrap">
        <select {...register("sort")} typeof="submit">
          {sortOptions.map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select>
      </span>
    </div>
  );
};

import { css } from "@emotion/react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  register: UseFormRegisterReturn;
  searchOptions: { key: string; label: string }[];
};

const container = css`
  display: flex;
  gap: 3px;
`;

const checkbox = css`
  input {
    display: none;
  }
  span {
    display: block;
    height: 32px;
    line-height: 32px;
    color: #fff;
    background: #477490;
    font-size: 15px;
    width: 110px;
    text-align: center;
  }
  input:checked + span {
    color: #fff; /* 文字色を白に */
    background: #12a6e6; /* 背景色を薄い赤に */
  }
`;

export const SearchValueBlocks: React.FC<Props> = (props) => {
  return (
    <div css={container}>
      {props.searchOptions.map((option) => {
        return (
          <div css={checkbox} key={option.label}>
            <label htmlFor={option.label}>
              <input
                id={option.label}
                type="checkbox"
                value={option.key}
                {...props.register} // 追記
              />
              <span>{option.label}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

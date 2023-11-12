import { css } from "@emotion/react";
import { useFormContext } from "react-hook-form";

type Props = {
  searchFilter: string;
  searchOptions: { key: string; label: string }[];
  width?: string;
};

const container = (width?: string) => css`
  display: flex;
  width: ${width};
  gap: 3px;
  flex-wrap: wrap;
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
    color: #fff;
    background: #12a6e6;
  }
`;

export const SearchValueBlocks: React.FC<Props> = (props) => {
  const width = props.width || "800px";
  const { register } = useFormContext();
  return (
    <div css={container(width)}>
      {props.searchOptions.map((option) => {
        return (
          <div css={checkbox} key={`${props.searchFilter}.${option.label}`}>
            <label htmlFor={`${props.searchFilter}.${option.label}`}>
              <input
                id={`${props.searchFilter}.${option.label}`}
                type="checkbox"
                value={option.key}
                {...register(props.searchFilter)} // 追記
              />
              <span>{option.label}</span>
            </label>
          </div>
        );
      })}
    </div>
  );
};

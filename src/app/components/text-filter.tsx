import { css } from "@emotion/react";
import { useFormContext } from "react-hook-form";

const main = css`
  display: flex;
  padding: 10px 40px;
  gap: 0 21px;
  height: 51px;
  background: #084371;
  input {
    width: 100%;
    background: #fff;
    padding: 5px;
  }
  .submit {
    display: flex;
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

export const TextFilter = () => {
  const { register } = useFormContext();
  return (
    <div css={main}>
      <input type="text" {...register("searchText")} placeholder="カード名、カードテキスト" />
      <div className="submit">
        <button type="submit">検索</button>
      </div>
    </div>
  );
};

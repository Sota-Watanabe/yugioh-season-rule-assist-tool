import { css } from "@emotion/react";
import { CardType } from "@/app/domains/models/card-type";

const main = css`
  display: flex;
  min-height: 204px;
  /* background: red; */
  .img-container {
    display: flex;
    align-items: center;
    margin-right: 9px;
  }
  .first-tier {
    display: flex;
    align-items: center;
    padding: 0 8px;
    > div:first-of-type {
      flex-grow: 1;
    }
    .ruby {
      font-size: 11px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    .name {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
  .second-tier {
    display: flex;
    align-items: center;
    font-size: 18px;
    padding: 0 8px;
    .card-type {
      flex-grow: 1;
    }
  }
  .third-tier {
    padding: 8px;
  }
  .vertical-line {
    margin: 13px;
    width: 1px;
    height: 27px;
    background-color: #989898;
  }
  .horizontal-line {
    width: 100%;
    height: 1px;
    background-color: #989898;
  }
`;

type Props = {
  value: CardType;
};

export const Card: React.FC<Props> = ({ value }) => {
  const isMonsterCard =
    value.card_properties.attribute !== "魔" &&
    value.card_properties.attribute !== "罠";
  console.log(value.card_properties.attribute);
  return (
    <div css={main}>
      <div className="img-container">
        <img src={value.image_url} alt="card_url" width={113} height={164} />
      </div>
      <div>
        <div className="first-tier">
          <div>
            <p className="ruby">{value.card_name.name_ruby}</p>
            <p className="name">{value.card_name.name}</p>
          </div>
          {value.card_release.season}期<div className="vertical-line" />
          <a href={value.card_url.ocg_url} target="_blank">
            公式
          </a>
          <div className="vertical-line" />
          <a href={value.card_url.wiki_url} target="_blank">
            wiki
          </a>
          <div className="vertical-line" />
          {value.card_release.release}
        </div>
        <div className="horizontal-line" />
        {isMonsterCard && (
          <div className="second-tier">
            {value.card_properties.attribute}属性
            <div className="vertical-line" />
            レベル{value.card_properties.level}
            <div className="vertical-line" />【
            <p className="card-type">
              {value.card_properties.card_type.join(" / ")}】
            </p>
            攻撃力 {value.status.atk}
            <div className="vertical-line" /> 守備力 {value.status.def}
          </div>
        )}
        {isMonsterCard || (
          <div className="second-tier">
            {value.card_properties.attribute === "魔" ? "魔法" : "罠"}
            <div className="vertical-line" />
            <p>{value.card_properties.incantation_type}</p>
          </div>
        )}
        <div className="horizontal-line" />
        <div className="third-tier">{value.text}</div>
      </div>
    </div>
  );
};

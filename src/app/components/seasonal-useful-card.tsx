import { css } from "@emotion/react";
import { CardType } from "@/app/domains/models/card-type";

const main = css`
  margin-bottom: 50px;
  h2 {
    margin: 13px 64px;
    font-family: Dela Gothic One;
    font-size: 36px;
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 30px 0;
  }
  .card-container {
    width: 233px;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      margin-top: 10px;
      width: 150px;
      text-align: center;
    }
  }
  .cards div + div {
    position: relative;
  }
  .cards div + div::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
    margin: auto;
    display: block;
    height: 144px;
    width: 1px;
    border-left: 1px solid #989898;
  }
  .cards > div:nth-of-type(4n + 1)::before {
    display: none;
  }
`;

type Props = {
  season: string;
  cards: CardType[];
};

export const SeasonalUsefulCard: React.FC<Props> = ({ season, cards }) => {
  return (
    <div css={main}>
      <h2>{season}</h2>
      <div className="cards">
        {cards.map((card) => {
          return (
            <div key={card.cid} className="card-container">
              <img
                src={card.image_url}
                alt="card_url"
                width={113}
                height={164}
              />
              <a href={card.card_url.ocg_url} target="_blank">
                {card.card_name.name}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

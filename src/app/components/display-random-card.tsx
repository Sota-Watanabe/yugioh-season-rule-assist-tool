import { css } from "@emotion/react";
import { CardType } from "@/app/domains/models/card-type";
import { useEffect, useState } from "react";
import { Card } from "@/app/components/card";

const main = css`
  margin: 50px 0;
  .random-card {
    display: flex;
    gap: 41px;
    justify-content: center;
    padding: 35px;
    background: #e5e4e4;
  }
  .selected-card-container {
    margin: 30px 0;
    height: 200px;
  }
  .selected-season {
    text-align: center;
    font-family: Dela Gothic One;
    font-size: 36px;
  }
`;

type Props = {
  cards: CardType[];
};

type SelectCardType = 1 | 2 | 3 | 4 | 5 | undefined;

export const DisplayRandomCard: React.FC<Props> = ({ cards }) => {
  useEffect(() => {
    setSelectedCard(undefined);
  }, [cards]);
  const [selectedCard, setSelectedCard] = useState<SelectCardType>(undefined);
  return (
    <div css={main}>
      <div className="random-card">
        {cards.map((card, index) => {
          return (
            <div
              key={card.cid}
              onClick={() => {
                setSelectedCard(index as SelectCardType);
              }}
            >
              <img
                src={card.image_url}
                alt="card_url"
                width={113}
                height={164}
              />
            </div>
          );
        })}
      </div>
      <div className="selected-season">{cards[0].card_release.season}期</div>
      <div className="selected-card-container">
        {selectedCard !== undefined && <Card value={cards[selectedCard]} />}
      </div>
    </div>
  );
};

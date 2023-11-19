"use client";
import { css } from "@emotion/react";
import { Header } from "@/app/components/header";
import { PageLinks } from "@/app/components/page-links";
import { useFetchCards } from "@/app/domains/hooks/use-fetch-cards";
import { useEffect, useState } from "react";
import { DisplayRandomCard } from "../components/display-random-card";

const top = css`
  background: #084371;
`;

const main = css`
  width: 968px;
  padding: 20px 0;
  margin: auto;
  > p {
    margin: 33px auto 50px;
    text-align: center;
    font-size: 20px;
  }

  .card-pack-list {
    display: flex;
    img {
      cursor: pointer;
    }
  }
`;

const selectPackList = ["1", "2", "3", "4", "5"] as const;
type SelectPackType = (typeof selectPackList)[number];

type Props = {
  updateCardPack: (packId: SelectPackType) => void;
};
const RandomPack: React.FC<Props> = ({ updateCardPack }) => {
  return (
    <>
      <p>君だけの運命のカードを見つけよう！</p>
      <div className="card-pack-list">
        {selectPackList.map((pack) => {
          return (
            <div
              key={pack}
              onClick={() => {
                updateCardPack(pack);
              }}
            >
              <img
                src={`/random-pack/${pack}-term-pack.png`}
                alt="card_url"
                width={193}
                height={318}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default function RandomPackPage() {
  const [selectedPack, setSelectedPack] = useState<{
    packId?: SelectPackType;
    timestamp: number;
  }>();

  const { fetchCards, updateCardFilterWithDiff } = useFetchCards();
  // NOTE: パックが更新されたら、再度fetch
  useEffect(() => {
    if (selectedPack?.packId)
      updateCardFilterWithDiff({
        isShuffle: true,
        limit: 5,
        season: [selectedPack.packId],
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPack?.packId]);

  const updateCardPack = (packId: SelectPackType) => {
    const timestamp = Math.floor(new Date().getTime() / 1000);
    setSelectedPack({ packId, timestamp });
  };

  return (
    <>
      <Header />
      <div css={top}>
        <PageLinks />
      </div>
      <div css={main}>
        <RandomPack updateCardPack={updateCardPack} />
        {selectedPack?.packId && <DisplayRandomCard cards={fetchCards.cards} />}
      </div>
    </>
  );
}

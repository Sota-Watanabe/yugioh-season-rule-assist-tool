"use client";
import { css } from "@emotion/react";
import { Header } from "@/app/components/header";
import { PageLinks } from "@/app/components/page-links";
import { useFetchCards } from "@/app/domains/hooks/use-fetch-cards";
import { SeasonalUsefulCard } from "@/app/components/seasonal-useful-card";

const top = css`
  background: #084371;
`;

const main = css`
  width: 968px;
  padding: 20px 0;
  margin: auto;
`;

export default function CardListPage() {
  const { fetchCards } = useFetchCards({ useful: true });

  return (
    <>
      <Header />
      <div css={top}>
        <PageLinks />
      </div>
      <div css={main}>
        <SeasonalUsefulCard
          season="1期"
          cards={fetchCards.cards.filter(
            (card) => card.card_release.season === 1
          )}
        />
        <SeasonalUsefulCard
          season="2期"
          cards={fetchCards.cards.filter(
            (card) => card.card_release.season === 2
          )}
        />
        <SeasonalUsefulCard
          season="3期"
          cards={fetchCards.cards.filter(
            (card) => card.card_release.season === 3
          )}
        />
        <SeasonalUsefulCard
          season="4期"
          cards={fetchCards.cards.filter(
            (card) => card.card_release.season === 4
          )}
        />
        <SeasonalUsefulCard
          season="5期"
          cards={fetchCards.cards.filter(
            (card) => card.card_release.season === 5
          )}
        />
      </div>
    </>
  );
}

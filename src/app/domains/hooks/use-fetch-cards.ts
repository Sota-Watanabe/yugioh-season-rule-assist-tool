import { useState } from "react";
import { CardType } from "@/app/domains/models/card-type";
import database from "@/../../public/database.json";

export const PERPAGE = 10;

export const defaultValues = {
  searchText: "",
  season: [] as string[],
  zeroFour: [] as string[],
  attribute: [] as string[],
  incantation: [] as string[],
  monster: [] as string[],
  card: [] as string[],
  level: [] as string[],
};

export const useFetchCards = (values: typeof defaultValues) => {
  const [filter, setFilter] = useState(values);
  const [page, setPage] = useState(1);
  // NOTE: cid順に並び替え
  let cards = database.cards.sort((a, b) =>
    a.cid > b.cid ? 1 : -1
  ) as CardType[];

  if (filter.season.length)
    cards = cards.filter((card) =>
      filter.season.includes(String(card.card_release.season))
    );
  if (filter.zeroFour.length && filter.zeroFour[0] === "1")
    cards = cards.filter((card) => card.card_release.zero_four === true);
  if (filter.attribute.length)
    cards = cards.filter((card) =>
      filter.attribute.includes(String(card.card_properties.attribute))
    );
  if (filter.incantation.length)
    cards = cards.filter((card) =>
      filter.incantation.includes(String(card.card_properties.incantation_type))
    );
  if (filter.monster.length)
    cards = cards.filter((card) =>
      filter.monster.includes(card.card_properties.monster_type)
    );
  if (filter.card.length)
    cards = cards.filter(
      (card) =>
        filter.card.filter((x) => card.card_properties.card_type.includes(x))
          .length > 0
    );
  if (filter.level.length)
    cards = cards.filter((card) =>
      filter.level.includes(String(card.card_properties.level))
    );

  if (filter.searchText !== "") {
    cards = cards.filter((card) => {
      return (
        card.card_name.name.indexOf(filter.searchText) > -1 ||
        card.card_name.name_ruby.indexOf(filter.searchText) > -1
      );
    });
  }

  const totalCount = cards.length;
  // NOTE: ページング
  cards = cards.slice(PERPAGE * (page - 1), PERPAGE * page);

  return {
    fetchCards: { cards, totalCount: totalCount },
    updateCardFilter: (filter: typeof defaultValues) => {
      setFilter(filter);
      setPage(1);
      window.scrollTo({
        top: 0,
      });
    },
    totalCount,
    page,
    updatePage: (page: number) => {
      setPage(page);
      window.scrollTo({
        top: 0,
      });
    },
  };
};

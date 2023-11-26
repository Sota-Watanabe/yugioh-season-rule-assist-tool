import { useState } from "react";
import { CardType } from "@/app/domains/models/card-type";
import database from "@/../../public/database.json";
import Fuse from "fuse.js";
import { sortOptions } from "@/app/domains/models/search-params";

export const PERPAGE = 10;
export const defaultValues = {
  sort: "cid" as (typeof sortOptions)[number]["key"],
  searchText: "",
  season: [] as string[],
  zeroFour: [] as string[],
  attribute: [] as string[],
  incantation: [] as string[],
  monster: [] as string[],
  card: [] as string[],
  level: [] as string[],
  useful: false,
  limit: PERPAGE,
  isShuffle: false,
} as const;

// ref: https://gray-code.com/javascript/shuffle-for-item-of-array/
const arrayShuffle = (cards: CardType[]) => {
  for (let i = cards.length - 1; 0 < i; i--) {
    // 0〜(i+1)の範囲で値を取得
    let r = Math.floor(Math.random() * (i + 1));

    // 要素の並び替えを実行
    let tmp = cards[i];
    cards[i] = cards[r];
    cards[r] = tmp;
  }
  return cards;
};

export const useFetchCards = (values?: Partial<typeof defaultValues>) => {
  const [filter, setFilter] = useState({ ...defaultValues, ...values });
  const [page, setPage] = useState(1);

  let cards = database.cards as CardType[];
  // 検索フィルター↓
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
    const fuse = new Fuse(cards, {
      threshold: 0.2,
      distance: 1000,
      keys: ["card_name.name", "card_name.name_ruby", "text"],
    });
    cards = fuse.search(filter.searchText).map((x) => x.item);
  }
  // 検索フィルター↑

  if (filter.useful) cards = cards.filter((card) => !!card.useful);

  if (filter.isShuffle) {
    arrayShuffle(cards);
  } else {
    // 並び替え設定（cid順、攻撃力降順、守備力降順）
    cards = cards.sort((a, b) => {
      switch (filter.sort) {
        case "cid":
          return a.cid > b.cid ? 1 : -1;
        case "atk":
          return a.status.atk < b.status.atk ? 1 : -1;
        case "def":
          return a.status.def < b.status.def ? 1 : -1;
      }
    }) as CardType[];
  }

  const totalCount = cards.length;

  if (filter.limit)
    cards = cards.slice(filter.limit * (page - 1), filter.limit * page);

  return {
    fetchCards: { cards, totalCount: totalCount },
    updateCardFilter: (filter: typeof defaultValues) => {
      setFilter(filter);
      setPage(1);
      window.scrollTo({
        top: 0,
      });
    },
    updateCardFilterWithDiff: (diff: Partial<typeof defaultValues>) => {
      setFilter({ ...filter, ...diff });
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

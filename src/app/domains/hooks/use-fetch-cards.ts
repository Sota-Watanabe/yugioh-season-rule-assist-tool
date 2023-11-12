import { firestore } from "@/firebase";
import { Query, collection, query, where } from "firebase/firestore";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { CardType } from "@/app/domains/models/card-type";

export const defaultValues = { page: 1, season: [], zeroFour: [] };

export const useFetchCards = (values: typeof defaultValues) => {
  const [filter, setFilter] = useState(values);
  const cardQueriesCollection = collection(firestore, "cards");

  let searchQuery = cardQueriesCollection as Query;

  if (filter.season.length)
    searchQuery = query(
      searchQuery,
      where("card_release.season", "in", filter.season.map(Number))
    );
  if (filter.zeroFour.length)
    searchQuery = query(
      searchQuery,
      where("card_release.zero_four", "==", filter.zeroFour[0] === "1")
    );

  const [value, loading] = useCollection(searchQuery);

  // TODO: ページング
  return {
    fetchCards: value?.docs.map((doc: { data: () => any }) =>
      doc.data()
    ) as CardType[],
    fetchCardsState: {
      isLoading: loading,
    },
    updateCardFilter: setFilter,
  };
};

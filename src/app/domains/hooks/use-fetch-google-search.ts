import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GoogleSearchItem } from "../models/google-search-response";

const count = "3";
const language = "lang_ja";

const fetchResult = async (query: string) => {
  const url = `https://www.googleapis.com/customsearch/v1?key=${
    process.env.NEXT_PUBLIC_APIKEY
  }&cx=${process.env.NEXT_PUBLIC_SEARCHENGINEID}&q=${
    query + " site:https://www.db.yugioh-card.com/yugiohdb/card_search.action"
  }&num=${count}&lr=${language}`;
  const response = await fetch(url);
  return await response.json();
};

export const useFetchGoogleSearch = (query: string) => {
  const [googleSearchParams, setGoogleSearchParams] = useState({
    query,
    count,
    language,
  });
  const { isLoading, data } = useQuery<{
    items: GoogleSearchItem[] | undefined;
  }>({
    queryKey: [googleSearchParams.query],
    queryFn: () => fetchResult(googleSearchParams.query),
  });

  return {
    googleSearchResult: data?.items,
    googleSearchResultState: {
      isLoading,
    },
    setQuery: (query: string) =>
      setGoogleSearchParams((prev) => ({ ...prev, query })),
  };
};

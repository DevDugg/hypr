import { News_page } from "../../../sanity.types";
import { client } from "../lib/client";
import { defineQuery } from "next-sanity";

export const getNewsPageData = async (): Promise<News_page> => {
  const NEWS_PAGE_QUERY = defineQuery(`*[_type == 'news_page']`);
  const data = await client.fetch(NEWS_PAGE_QUERY, {}, { cache: "no-store" });
  return data[0];
};

const news_page = {
  name: "news_page",
  type: "document",
  title: "News Page",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
};

export default news_page;

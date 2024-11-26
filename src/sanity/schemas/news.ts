import { NEWS_ITEM_QUERYResult, News } from "../../../sanity.types";

import { client } from "../lib/client";
import { defineQuery } from "next-sanity";

export const getNewsData = async (
  page: number = 1,
  pageSize: number = 10,
): Promise<{ news: News[]; hasMore: boolean }> => {
  const offset = (page - 1) * pageSize;

  // Define the query without interpolating the offset directly
  const NEWS_QUERY = defineQuery(`*[_type == 'news'] | order(_createdAt desc) [$offset...$limit]`);

  // Define the count query
  const COUNT_NEWS_QUERY = defineQuery(`count(*[_type == 'news'])`);

  // Fetch the paginated news data and total count in parallel
  const [data, totalCount] = await Promise.all([
    client.fetch(NEWS_QUERY, { offset, limit: offset + pageSize }, { cache: "no-store" }),
    client.fetch(COUNT_NEWS_QUERY, {}, { cache: "no-store" }),
  ]);

  // Calculate if there are more pages
  const hasMore = offset + pageSize < totalCount;

  return { news: data, hasMore };
};

export const getNewsItemData = async (slug: string): Promise<NEWS_ITEM_QUERYResult[number]> => {
  const NEWS_ITEM_QUERY = defineQuery(`
    *[_type == 'news' && slug.current == $slug] {
      ...,
      author-> { ... }
    }
  `);
  const data = await client.fetch(NEWS_ITEM_QUERY, { slug }, { cache: "no-store" });
  return data[0];
};

const news = {
  name: "news", // IMPORTANT, this is query name
  type: "document",
  title: "News",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "authors" }],
    },
    {
      name: "display_title",
      type: "string",
      title: "Display Title",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
    },
    {
      name: "main_image",
      type: "image",
      title: "Main Image",
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },
  ],
};

export default news;

import { News } from "../../../sanity.types";
import { client } from "../lib/client";
import { defineQuery } from "next-sanity";

// Function to get hero section data
export const getNewsData = async (): Promise<News[]> => {
  const NEWS_QUERY = defineQuery(`*[_type == 'news']`);
  const data = await client.fetch(NEWS_QUERY, {}, { cache: "no-store" });
  return data;
};

export const getNewsItemData = async (slug: string): Promise<News> => {
  const NEWS_ITEM_QUERY = defineQuery(`*[_type == 'news' && slug.current == $slug]`);
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

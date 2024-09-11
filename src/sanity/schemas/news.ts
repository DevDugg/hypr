import { News } from "../../../sanity.types";
import { client } from "../lib/client";

// Function to get hero section data
export const getNewsData = async (): Promise<News[]> => {
  const query = `*[_type == 'news']`; // *[_type == 'hero_section'] gets all documents of type hero_section
  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
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

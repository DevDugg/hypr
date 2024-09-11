import { client } from "../lib/client";

// Interface for correct hero section types
export interface INewsData {
  title: string;
  display_title: string;
  slug: string;
  main_image: any;
  short_description: string;
  content: any;
}

// Function to get hero section data
export const getNewsData = async (): Promise<INewsData[]> => {
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
      name: "subtitle",
      type: "string",
      title: "Subtitle",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
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
      name: "items",
      type: "array",
      title: "Items",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              type: "string",
              title: "Name",
            },
            {
              name: "short_description",
              type: "string",
              title: "Short Description",
            },
            {
              name: "image",
              type: "image",
              title: "Image",
            },
          ],
        },
      ],
    },
  ],
};

export default news;

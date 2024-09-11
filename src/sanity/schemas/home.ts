import { INewsData } from "./news";
import { IProjectsData } from "./projects";
import { client } from "../lib/client";

// Interface for correct hero section types
export interface IHomePage {
  hero: {
    images: any[];
    description: any;
  };
  services: {
    subtitle: string;
    items: {
      name: string;
      image: any;
    }[];
  };
  projects: IProjectsData[];
  about: {
    subtitle: string;
    text: string;
  };
  latest_news: {
    title: string;
    subtitle: string;
    description: string;
    items: INewsData;
  };
  clients: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      image: any;
    }[];
  };
  creators: {
    title: string;
    subtitle: string;
    description: string;
    items: {
      creator_name: string;
      handle: string;
      social_media_1: string;
      social_media_2: string;
    };
  };
  gallery: {
    title: string;
  };
}

// Function to get hero section data
export const getHomePageData = async (): Promise<IHomePage[]> => {
  const query = `*[_type == 'home_page']`; // *[_type == 'hero_section'] gets all documents of type hero_section
  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
};

const home_page = {
  name: "home_page", // IMPORTANT, this is query name
  type: "document",
  title: "Home Page",
  fields: [
    {
      name: "hero",
      type: "object",
      title: "Hero",
      fields: [
        {
          name: "images",
          type: "array",
          title: "Images",
          of: [{ type: "image" }],
        },
        {
          name: "description",
          type: "text",
          title: "Description",
        },
      ],
    },
    {
      name: "services",
      type: "object",
      title: "Services",
      fields: [
        {
          name: "subtitle",
          type: "string",
          title: "Subtitle",
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
                  name: "image",
                  type: "image",
                  title: "Image",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "projects",
      type: "object",
      title: "Projects",
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
          type: "text",
          title: "Description",
        },
        {
          name: "items",
          type: "array",
          title: "Items",
          of: [
            {
              type: "reference",
              to: [{ type: "projects" }],
            },
          ],
        },
      ],
    },
    {
      name: "about",
      type: "object",
      title: "About",
      fields: [
        {
          name: "subtitle",
          type: "string",
          title: "Subtitle",
        },
        {
          name: "text",
          type: "text",
          title: "Text",
        },
      ],
    },
    {
      name: "latest_news",
      type: "object",
      title: "Latest News",
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
          type: "text",
          title: "Description",
        },
        {
          name: "items",
          type: "array",
          title: "Items",
          of: [
            {
              type: "reference",
              to: [{ type: "news" }],
            },
          ],
        },
      ],
    },
    {
      name: "clients",
      type: "object",
      title: "Clients",
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
                  name: "image",
                  type: "image",
                  title: "Image",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "creators",
      type: "object",
      title: "Creators",
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
          type: "text",
          title: "Description",
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
                  name: "creator_name",
                  type: "string",
                  title: "Creator Name",
                },
                {
                  name: "handle",
                  type: "string",
                  title: "Handle",
                },
                {
                  name: "social_media_1",
                  type: "string",
                  title: "Social Media 1",
                },
                {
                  name: "social_media_2",
                  type: "string",
                  title: "Social Media 2",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default home_page;

import { HOME_PAGE_QUERYResult } from "../../../sanity.types";
import { client } from "../lib/client";
import { defineQuery } from "next-sanity";

// Interface for correct hero section types

// Function to get hero section data
export const getHomePageData = async (): Promise<HOME_PAGE_QUERYResult> => {
  const HOME_PAGE_QUERY = defineQuery(`*[_type == "home_page"]{
    hero,
    services,
    "projects": projects{
      ...,
      items[]->{
        ...
      }
    },
    about,
    "latest_news": latest_news {
      title,
      subtitle,
      description,
      "items": items[]->{
        ...
      }
    },
    clients,
    "creators": creators {
      title,
      subtitle,
      description,
      "items": items[]->{
        ...
      }
    },
    gallery
  }
  `);

  const data = await client.fetch(HOME_PAGE_QUERY, {}, { cache: "no-store" });
  return data;
};

const home_page = {
  name: "home_page",
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
              type: "reference",
              to: [{ type: "creators" }],
            },
          ],
        },
      ],
    },
    {
      name: "gallery",
      type: "object",
      title: "Gallery",
      fields: [
        {
          name: "title",
          type: "string",
          title: "Title",
        },
        {
          name: "images",
          type: "object",
          title: "Images",
          fields: [
            {
              name: "image_1",
              type: "image",
              title: "Image 1",
            },
            {
              name: "image_2",
              type: "image",
              title: "Image 2",
            },
            {
              name: "image_3",
              type: "image",
              title: "Image 3",
            },
            {
              name: "image_4",
              type: "image",
              title: "Image 4",
            },
            {
              name: "image_5",
              type: "image",
              title: "Image 5",
            },
            {
              name: "image_6",
              type: "image",
              title: "Image 6",
            },
          ],
        },
      ],
    },
  ],
};

export default home_page;

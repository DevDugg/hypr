import { AboutUs } from "../../../sanity.types";
import { client } from "../lib/client";
import { defineQuery } from "next-sanity";

export const getAboutPageData = async (): Promise<AboutUs> => {
  const ABOUT_PAGE_QUERY = defineQuery(`*[_type == 'about-us']`);
  const data = await client.fetch(ABOUT_PAGE_QUERY, {}, { cache: "no-store" });
  return data[0];
};

const about_us = {
  name: "about-us",
  type: "document",
  title: "About Us Page",
  fields: [
    {
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
        },
        {
          name: "main_image",
          title: "Main Image",
          type: "image",
        },
        {
          name: "tags",
          title: "Tags",
          type: "object",
          fields: [
            {
              name: "tag_1",
              title: "Tag 1",
              type: "string",
            },
            {
              name: "tag_2",
              title: "Tag 2",
              type: "string",
            },
            {
              name: "tag_3",
              title: "Tag 3",
              type: "string",
            },
            {
              name: "tag_4",
              title: "Tag 4",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "about",
      title: "About Section",
      type: "object",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "subtitle",
          title: "Subtitle",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "text",
        },
        {
          name: "features",
          title: "Features",
          type: "object",
          fields: [
            {
              name: "feature_1",
              title: "Feature 1",
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                },
              ],
            },
            {
              name: "feature_2",
              title: "Feature 2",
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
                },
              ],
            },
            {
              name: "feature_3",
              title: "Feature 3",
              type: "object",
              fields: [
                {
                  name: "title",
                  title: "Title",
                  type: "string",
                },
                {
                  name: "description",
                  title: "Description",
                  type: "text",
                },
                {
                  name: "image",
                  title: "Image",
                  type: "image",
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
                  name: "creator_role",
                  type: "string",
                  title: "Creator Role",
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
      name: "call_to_action",
      type: "object",
      title: "Call To Action",
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "button_text",
          title: "CTA Button Text",
          type: "string",
        },
      ],
    },
    {
      name: "gallery",
      type: "object",
      title: "Gallery",
      fields: [
        {
          name: "image_1",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "image_2",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "image_3",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "image_4",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "image_5",
          type: "image",
          options: {
            hotspot: true,
          },
        },
        {
          name: "image_6",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

export default about_us;

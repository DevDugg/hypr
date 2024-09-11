import { client } from "../lib/client";

// Interface for correct hero section types
export interface IProjectsData {
  name: string;
  slug: string;
  title_1: string;
  title_2: string;
  short_description: string;
  description_1: string;
  description_2: string;
  key_visuals: any[];
  information: {
    name: string;
    value: string;
  }[];
  videos: {
    name: string;
    video: any;
  }[];
  gallery: {
    image_1: any;
    image_2: any;
    image_3: any;
    image_4: any;
    image_5: any;
    image_6: any;
  };
}

// Function to get hero section data
export const getProjectsData = async (): Promise<IProjectsData[]> => {
  const query = `*[_type == 'projects']`; // *[_type == 'hero_section'] gets all documents of type hero_section
  const data = await client.fetch(query, {}, { cache: "no-store" });
  return data;
};
const projects = {
  name: "projects", // IMPORTANT, this is query name
  type: "document",
  title: "Projects",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "title_1",
      type: "string",
      title: "Title 1",
    },
    {
      name: "title_2",
      type: "string",
      title: "Title 2",
    },
    {
      name: "short_description",
      type: "string",
      title: "Short Description",
    },
    {
      name: "description_1",
      type: "string",
      title: "Description 1",
    },
    {
      name: "description_2",
      type: "string",
      title: "Description 2",
    },
    {
      name: "key_visuals",
      type: "array",
      title: "Key Visuals",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "information",
      type: "array",
      title: "Information",
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
              name: "value",
              type: "string",
              title: "Value",
            },
          ],
        },
      ],
    },
    {
      name: "videos",
      type: "array",
      title: "Videos",
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
              name: "video",
              type: "file",
              title: "Video",
              options: {
                accept: "video/mp4",
              },
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

export default projects;
